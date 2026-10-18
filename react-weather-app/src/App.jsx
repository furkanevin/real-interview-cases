import weather from './data/weather.json';
import Sidebar from './components/Sidebar/Sidebar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Activities from './components/Activities/Activities';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast';
import HourlyForecast from './components/HourlyForecast/HourlyForecast';
import AirConditions from './components/AirConditions/AirConditions';

function App() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="dashboard">
        <section className="dashboard__main">
          <CurrentWeather
            city={weather.city}
            condition={weather.condition}
            temperature={weather.temperature}
            updatedAt={weather.updatedAt}
          />
          <Activities activities={weather.activities} />
          <WeeklyForecast weeks={weather.weekly} />
        </section>

        <aside className="dashboard__side">
          <HourlyForecast hours={weather.hourly} />
          <AirConditions
            values={weather.airConditions}
            updatedAt={weather.updatedAt}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
