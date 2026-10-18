import './Sidebar.scss';

const NAV_ITEMS = [
  { label: 'Weather', icon: '/weather-2.svg', active: true },
  { label: 'Cities', icon: '/location.svg' },
  { label: 'Map', icon: '/compass.svg' },
  { label: 'Settings', icon: '/settings.svg' },
];

const Sidebar = () => {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <img className="sidebar__logo" src="/header-logo.svg" alt="WeatherApp" />

      <ul className="sidebar__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href="#"
              className={`sidebar__link ${item.active ? 'sidebar__link--active' : ''}`}
              aria-current={item.active ? 'page' : undefined}
            >
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
