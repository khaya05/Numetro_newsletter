import PropTypes from 'prop-types';
import './Card.scss';

function Card({ name, link, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="link">
        <a href={link} target="_blank" rel="noreferrer">
          Book Now
        </a>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
