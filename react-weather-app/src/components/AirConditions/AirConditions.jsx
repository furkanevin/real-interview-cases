import './AirConditions.scss';
import { formatTime } from '../../utils/weather';

const AirConditions = ({ values, updatedAt }) => {
  const items = [
    { label: 'Real feel', value: `${values.realFeel}°`, icon: '/real.svg' },
    { label: 'Wind', value: `${values.wind} km/h`, icon: '/wind.svg' },
    { label: 'Chance of rain', value: `${values.chanceOfRain}%`, icon: '/rain.svg' },
    { label: 'UV index', value: values.uvIndex, icon: '/w1.png' },
  ];

  return (
    <section className="air">
      <div className="air__header">
        <h2 className="air__title">Air conditions</h2>
        <span className="air__time">
          <img src="/clock.svg" alt="" />
          {formatTime(updatedAt)}
        </span>
      </div>

      <ul className="air__grid">
        {items.map((item) => (
          <li key={item.label} className="air__item">
            <img src={item.icon} alt="" />
            <div>
              <p className="air__label">{item.label}</p>
              <p className="air__value">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AirConditions;
