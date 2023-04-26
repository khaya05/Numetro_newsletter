import PropTypes from 'prop-types';
import './Banner.scss';

function Banner({ banner, name, movieLink }) {
  return (
    <div className="banner">
      <a href={movieLink} target="_blank" rel="noreferrer">
        <img src={banner} alt={name} />
      </a>
    </div>
  );
}

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired,
};

export default Banner;
