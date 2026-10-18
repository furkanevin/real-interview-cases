import './HourlyForecast.scss';

const HourlyForecast = ({ hours }) => {
  const temperatures = hours.map((hour) => hour.temperature);
  const max = Math.max(...temperatures);
  const min = Math.min(...temperatures);

  // sıcaklığa göre çubuk yüksekliği (%35 - %100 arası)
  const barHeight = (temperature) =>
    max === min ? 100 : 35 + ((temperature - min) / (max - min)) * 65;

  return (
    <section className="hourly">
      <h2 className="hourly__title">Hourly forecast</h2>

      <ul className="hourly__list">
        {hours.map(({ time, temperature }) => (
          <li key={time} className="hourly__item">
            <span className="hourly__temp">{temperature}°</span>
            <div className="hourly__bar">
              <div style={{ height: `${barHeight(temperature)}%` }} />
            </div>
            <span className="hourly__time">{time}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HourlyForecast;
