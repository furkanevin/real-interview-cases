const Loader = () => {
  const arr = Array.from({ length: 5 }, (_, i) => i);

  return arr.map((i) => (
    <div
      key={i}
      role="status"
      className="p-10 border  rounded shadow animate-pulse  border-gray-700"
    >
      <div className="h-2.5 rounded-full bg-gray-700 w-48 mb-4"></div>
      <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
      <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
      <div className="h-2 rounded-full bg-gray-700"></div>
    </div>
  ));
};

export default Loader;
