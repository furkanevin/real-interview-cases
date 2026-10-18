import { useState } from 'react';
import './WeeklyForecast.scss';
import { getCondition } from '../../utils/weather';

const WeeklyForecast = ({ weeks }) => {
  // varsayılan olarak "bu hafta" gösterilir
  const [weekIndex, setWeekIndex] = useState(1);
  const week = weeks[weekIndex];

  return (
    <section className="weekly">
      <div className="weekly__header">
        <button
          onClick={() => setWeekIndex(weekIndex - 1)}
          disabled={weekIndex === 0}
          aria-label="Previous week"
        >
          ‹
        </button>
        <h2>{week.label}</h2>
        <button
          onClick={() => setWeekIndex(weekIndex + 1)}
          disabled={weekIndex === weeks.length - 1}
          aria-label="Next week"
        >
          ›
        </button>
      </div>

      <ul className="weekly__days">
        {week.days.map(({ day, condition, temperature }) => {
          const { icon, label } = getCondition(condition);

          return (
            <li key={day} className="weekly__day">
              <span className="weekly__name">{day.slice(0, 3)}</span>
              <img src={icon} alt={label} title={label} />
              <span className="weekly__temp">{temperature}°</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WeeklyForecast;
