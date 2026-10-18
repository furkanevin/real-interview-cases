import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import millify from 'millify';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import InfoField from '../../components/InfoField';

const DetailPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedCountry = new URLSearchParams(location.search).get('country');
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch({ type: 'DATA_FETCH_REQUESTED', payload: selectedCountry });
  }, [dispatch, selectedCountry]);

  const fieldArray = [
    { label: 'Confirmed Cases', value: millify(data?.confirmed ?? 0) },
    { label: 'Active Cases', value: millify(data?.active ?? 0) },
    { label: 'Deaths', value: millify(data?.deaths ?? 0) },
    { label: 'Recovered', value: millify(data?.recovered ?? 0) },
    { label: 'Fatality Rate', value: `${((data?.fatalityRate ?? 0) * 100).toFixed(2)}%` },
    { label: 'Last Update', value: data?.lastUpdate },
    { label: 'Country Code', value: data?.iso },
    { label: 'Regions Included', value: data?.regionCount },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center p-6 bg-gray-700">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/"
            className="py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800"
          >
            &lt; Back
          </Link>
          <div className="flex items-center space-x-2">
            {!isLoading && !error && (
              <h1 className="text-3xl font-bold text-gray-800">{data?.name}</h1>
            )}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading && <Loader />}

          {error && <Error error={error} />}

          {!isLoading &&
            !error &&
            fieldArray.map((field) => <InfoField key={field.label} field={field} />)}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
