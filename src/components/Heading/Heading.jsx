import PropTypes from 'prop-types';

function Heading({ heading }) {
  return <h2>{ heading }</h2>;
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
