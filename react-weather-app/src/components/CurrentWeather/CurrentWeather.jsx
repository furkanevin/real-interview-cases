import './CurrentWeather.scss';
import { formatDate, getCondition } from '../../utils/weather';

const CurrentWeather = ({ city, condition, temperature, updatedAt }) => {
  const { icon, label } = getCondition(condition);

  return (
    <section className="current">
      <div className="current__info">
        <p className="current__date">{formatDate(updatedAt)}</p>
        <h1 className="current__city">{city}</h1>
        <p className="current__condition">{label}</p>
      </div>

      <div className="current__temp">
        <img src={icon} alt={label} />
        <span>
          {temperature}
          <sup>°C</sup>
        </span>
      </div>
    </section>
  );
};

export default CurrentWeather;
