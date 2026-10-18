import UniversityCard from './UniversityCard';
import { useData } from '../context/UniversityContext';
import Pagination from './Pagination';
import Loader from './Loader';
import Error from './Error';

const Universities = () => {
  const { filtered, isLoading, error } = useData();

  return (
    <>
      <div className="min-h-[60vh] flex flex-wrap justify-center items-center">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : filtered.length === 0 ? (
          <p>No universities found</p>
        ) : (
          filtered.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))
        )}
      </div>

      <Pagination />
    </>
  );
};

export default Universities;
