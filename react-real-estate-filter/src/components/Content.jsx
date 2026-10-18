import { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../context/apiContext';
import Item from './Item';
import Loader from './Loader';
import Error from './Error';

const PAGE_SIZE = 10;

const Content = () => {
  const { filtered, data, error, isLoading } = useContext(ApiContext);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // filtre değişince listeyi baştan göster
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filtered]);

  return (
    <div className="col-span-8 max-md:col-span-12 overflow-hidden">
      <div className="flex flex-col gap-10 h-full">
        <div className="border p-5 rounded-sm text-center text-lg font-bold">
          {isLoading
            ? 'Yükleniyor...'
            : `${data.length} ilandan ${filtered.length} tanesi kriterlere uyuyor`}
        </div>

        <div className="border rounded-sm p-5 h-full overflow-auto">
          <h4 className="text-center text-lg font-semibold">İlanlar</h4>

          <div className="flex flex-col gap-10 mt-5">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <Error error={error.message} />
            ) : filtered.length === 0 ? (
              <p className="text-center text-gray-400 mt-10">
                Aranan kriterlere uygun ilan bulunamadı.
              </p>
            ) : (
              <>
                {filtered.slice(0, visibleCount).map((ad) => (
                  <Item key={ad.ad_id ?? ad.ad_page_title} ad={ad} />
                ))}

                {visibleCount < filtered.length && (
                  <button
                    type="button"
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                    className="self-center border rounded-lg py-2 px-6 hover:bg-gray-700"
                  >
                    Daha fazla göster ({filtered.length - visibleCount})
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
