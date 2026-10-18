import { storiesData } from '../constants';

const Stories = () => {
  return (
    <div className="flex gap-4 overflow-auto">
      {storiesData.map((image, i) => (
        <img
          key={image}
          className="border-[4px] rounded-full w-[80px] h-[80px] shrink-0"
          src={image}
          alt={`Story ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default Stories;
