import { api } from '../utils/api';

// Haritadaki ülke adı ile API'deki bölge adının farklı olduğu durumlar
const NAME_ALIASES = {
  'United States': 'US',
  'South Korea': 'Korea, South',
  'Democratic Republic of Congo': 'Congo (Kinshasa)',
  'Republic of Congo': 'Congo (Brazzaville)',
  "Côte d'Ivoire": "Cote d'Ivoire",
  'Cape Verde': 'Cabo Verde',
  'Curaçao': 'Curacao',
  'Brunei Darussalam': 'Brunei',
  Myanmar: 'Burma',
  Swaziland: 'Eswatini',
  "Lao People's Democratic Republic": 'Laos',
  Taiwan: 'Taiwan*',
  'Vatican City': 'Holy See',
  'Palestinian Territories': 'West Bank and Gaza',
  Macau: 'Macao SAR',
};

// Bölge listesi bir kez çekilip önbellekte tutulur
let regionsRequest;
const getRegions = () => {
  regionsRequest ??= api
    .get('/regions')
    .then((res) => res.data.data)
    .catch((error) => {
      regionsRequest = undefined; // hata olursa bir sonraki aramada tekrar dene
      throw error;
    });
  return regionsRequest;
};

const findRegion = (regions, countryName) => {
  const name = countryName.trim();
  const target = (NAME_ALIASES[name] ?? name).toLowerCase();
  return regions.find((region) => region.name.toLowerCase() === target);
};

const sum = (reports, key) => reports.reduce((total, report) => total + report[key], 0);

/**
 * Bir ülkenin güncel istatistiklerini döndürür.
 * API'nin `q` parametresi bulanık eşleşme yaptığı için (ör. "United States" → "United Arab Emirates")
 * önce ülkenin ISO kodu bulunur, sonra o koda ait tüm eyalet/bölge kayıtları toplanır.
 * Ülke bulunamazsa null döner; ağ hataları ise saga'ya fırlatılır.
 */
export const getData = async (action) => {
  const regions = await getRegions();
  const region = findRegion(regions, action.payload);

  if (!region) return null;

  const res = await api.get('/reports', { params: { iso: region.iso } });
  const reports = res.data.data;

  if (reports.length === 0) return null;

  const confirmed = sum(reports, 'confirmed');
  const deaths = sum(reports, 'deaths');

  return {
    name: action.payload,
    iso: region.iso,
    confirmed,
    deaths,
    recovered: sum(reports, 'recovered'),
    active: sum(reports, 'active'),
    fatalityRate: confirmed > 0 ? deaths / confirmed : 0,
    lastUpdate: reports.map((report) => report.last_update).sort().at(-1),
    regionCount: reports.length,
  };
};
