import { useState } from 'react';
import TabOne from './TabOne';
import TabTwo from './TabTwo';
import { useSearchParams } from 'react-router-dom';

const TABS = [
  { id: 'type', label: 'İlan Tipi' },
  { id: 'location', label: 'Konum' },
];

const Filter = () => {
  const [activeTab, setActiveTab] = useState('type');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    // İki sekme de DOM'da kaldığı için form her iki sekmedeki değerleri birlikte gönderir
    const data = Object.fromEntries(new FormData(e.target).entries());
    const params = new URLSearchParams(searchParams);

    const setOrDelete = (key, value) =>
      value ? params.set(key, value) : params.delete(key);

    setOrDelete('tip', data.type);
    setOrDelete('il', data.city);
    setOrDelete('ilçe', data.district);

    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchParams({});
  };

  return (
    <form
      // URL değişince (ör. temizle) form alanları yeniden oluşturulup varsayılan değerleri alır
      key={searchParams.toString()}
      onSubmit={handleSubmit}
      className="col-span-4 max-md:col-span-12 p-5 border rounded-sm flex flex-col justify-between gap-8"
    >
      <div className="flex justify-center gap-6" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`py-2 px-6 border rounded transition hover:bg-gray-500 ${
              activeTab === tab.id ? 'bg-yellow-500 text-black' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sekmeler gizlenir ama kaldırılmaz; böylece diğer sekmedeki seçim kaybolmaz */}
      <div hidden={activeTab !== 'type'}>
        <TabOne />
      </div>
      <div hidden={activeTab !== 'location'}>
        <TabTwo />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          onClick={handleReset}
          className="py-2 px-6 rounded-lg border transition hover:bg-gray-700"
        >
          Temizle
        </button>
        <button
          type="submit"
          className="bg-red-500 py-2 px-10 rounded-lg transition hover:bg-red-600"
        >
          Sorgula
        </button>
      </div>
    </form>
  );
};

export default Filter;
