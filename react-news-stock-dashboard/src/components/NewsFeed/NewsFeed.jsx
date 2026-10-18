import { Link } from 'react-router-dom';
import { formatPublishedDate } from '../../utils/api';
import './NewsFeed.css';

const NewsFeed = ({ singleNews }) => {
  const { id, title, time_published, authors, summary, banner_image } = singleNews;

  return (
    <Link to={`/newsDetail/${id}`} className="news-wrapper">
      {banner_image && <img className="news-img" src={banner_image} alt="" />}
      <h2 className="news-title">{title}</h2>
      <p>{summary}</p>
      <p className="news-extra">
        <span>{formatPublishedDate(time_published)}</span> · {authors?.join(', ')}
      </p>
    </Link>
  );
};

export default NewsFeed;
