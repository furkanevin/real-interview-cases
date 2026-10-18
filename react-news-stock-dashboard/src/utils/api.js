import axios from 'axios';

// json-server adresi; farklı bir port kullanıyorsanız .env içinde VITE_API_URL tanımlayın
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3050',
});

// Menüdeki kategoriler ve haberin "topics" alanında hangi konulara karşılık geldikleri
export const CATEGORIES = [
  { name: 'Home', topics: [] },
  { name: 'Economy', topics: ['Economy - Monetary', 'Economy - Macro', 'Economy - Fiscal'] },
  { name: 'Technology', topics: ['Technology'] },
  { name: 'Blockchain', topics: ['Blockchain'] },
];

export const matchesCategory = (news, categoryName) => {
  const category = CATEGORIES.find((c) => c.name === categoryName);
  if (!category || category.topics.length === 0) return true;

  return news.topics?.some((t) => category.topics.includes(t.topic));
};

// Alpha Vantage tarih formatı: "20240322T093000"
export const formatPublishedDate = (value) => {
  const match = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})$/.exec(value ?? '');
  if (!match) return 'Unknown date';

  const [, year, month, day, hour, minute, second] = match.map(Number);
  return new Date(year, month - 1, day, hour, minute, second).toLocaleString();
};
