import Filter from '../components/Filter';
import Content from './../components/Content';

const PageOne = () => {
  return (
    <div className="min-h-screen md:h-screen bg-gray-900 text-white gap-10 lg:gap-24 p-5 lg:p-24 grid grid-cols-12">
      <Filter />
      <Content />
    </div>
  );
};

export default PageOne;
