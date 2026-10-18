import Content from '../components/Content';
import Filter from '../components/Filter';

const PageTwo = () => {
  return (
    <div className="min-h-screen md:h-screen bg-gray-900 text-white gap-10 lg:gap-24 p-5 lg:p-24 grid grid-cols-12">
      <Content />
      <Filter />
    </div>
  );
};

export default PageTwo;
