import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, formatPublishedDate } from '../../utils/api';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setDetail(null);
    setError(null);

    api
      .get(`/feed/${id}`)
      .then((res) => setDetail(res.data))
      .catch(() => setError('This news could not be found.'));
  }, [id]);

  if (error) {
    return (
      <div className="news-detail">
        <Link to="/">‹ Back to news</Link>
        <p className="mt-4">{error}</p>
      </div>
    );
  }

  if (!detail) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <article className="news-detail">
      <Link to="/">‹ Back to news</Link>

      <h1 className="news-detail__title">{detail.title}</h1>

      <p className="news-detail__meta">
        {formatPublishedDate(detail.time_published)} · {detail.authors?.join(', ')} ·{' '}
        {detail.source}
      </p>

      {detail.banner_image && (
        <img className="news-detail__img" src={detail.banner_image} alt="" />
      )}

      <p className="news-detail__summary">{detail.summary}</p>

      {detail.topics?.length > 0 && (
        <ul className="news-detail__topics">
          {detail.topics.map((t) => (
            <li key={t.topic}>{t.topic}</li>
          ))}
        </ul>
      )}

      <p>
        Overall sentiment: <strong>{detail.overall_sentiment_label}</strong>
      </p>

      <a href={detail.url} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
        Read the full article on {detail.source}
      </a>
    </article>
  );
};

export default NewsDetail;
