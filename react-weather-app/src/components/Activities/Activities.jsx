import './Activities.scss';

const Activities = ({ activities }) => {
  return (
    <section className="activities">
      <h2 className="activities__title">
        <img src="/heart.svg" alt="" width={18} height={18} />
        Activities in your area
      </h2>

      <ul className="activities__list">
        {activities.map((activity) => (
          <li key={activity.title} className="activities__item">
            <img src={activity.image} alt={activity.title} />
            <span>{activity.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Activities;
