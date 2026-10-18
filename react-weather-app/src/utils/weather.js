// Hava durumu tipine göre ikon ve okunabilir etiket
export const CONDITIONS = {
  sunny: { icon: '/w1.png', label: 'Sunny' },
  'sunny cloudy': { icon: '/w2.png', label: 'Partly cloudy' },
  rainy: { icon: '/w3.png', label: 'Rainy' },
  'sunny rainy': { icon: '/w4.png', label: 'Showers' },
  thunder: { icon: '/w5.png', label: 'Thunderstorm' },
};

export const getCondition = (condition) =>
  CONDITIONS[condition] ?? { icon: '/w1.png', label: condition };

export const formatDate = (isoDate) =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  }).format(new Date(isoDate));

export const formatTime = (isoDate) =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'short',
  }).format(new Date(isoDate));
