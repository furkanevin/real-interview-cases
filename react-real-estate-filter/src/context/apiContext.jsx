import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([]);

  const [searchParams] = useSearchParams();

  const cityId = searchParams.get('il');
  const district = searchParams.get('ilçe');
  const type = searchParams.get('tip');

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/list?key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        setData(res.data);
        setFiltered(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));

    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/locationLookup?key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => setLocations(res.data))
      .catch((err) => setError(err));
  }, []);

  useEffect(() => {
    let filteredData = data;

    if (filteredData && cityId && locations) {
      // Find the location object with the matching ad_province_id
      const foundLocation = locations.find(
        (location) => location.ad_province_id === cityId
      );

      // If a matching location is found, filter by province name
      if (foundLocation) {
        filteredData = filteredData.filter(
          (entry) => entry.ad_province_name === foundLocation.ad_province_name
        );
      }
    }

    if (filteredData && district) {
      filteredData = filteredData.filter(
        (entry) => entry.ad_district_name === district
      );
    }

    if (filteredData && type) {
      filteredData = filteredData.filter((entry) => entry.ad_status === type);
    }

    setFiltered(filteredData);
  }, [data, locations, cityId, district, type]);

  return (
    <ApiContext.Provider value={{ data, error, isLoading, filtered, locations }}>
      {children}
    </ApiContext.Provider>
  );
};
