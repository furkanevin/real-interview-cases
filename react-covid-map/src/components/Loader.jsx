const Loader = () => {
  const array = Array.from({ length: 8 }, (_, i) => i);
  return (
    <>
      {array.map((i) => (
        <div
          key={i}
          data-testid="loader"
          className="bg-gray-200 p-4 rounded-lg shadow-md animate-pulse"
        >
          <div className="bg-gray-700 mb-10 w-3/4 h-1"></div>
          <div className="bg-gray-700 mb-2 w-1/2 h-1"></div>
        </div>
      ))}
    </>
  );
};

export default Loader;
