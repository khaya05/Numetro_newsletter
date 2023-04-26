import { featured } from '../../data';
import Card from '../Card/Card';
import Heading from '../Heading/Heading';
import './Featured.scss';

function Featured() {
  return (
    <>
      <Heading heading="Now Booking" />
      <div className="featured">
        {featured.map(({ id, name, link, img }) => {
          return <Card id={id} name={name} link={link} key={id} img={img} />;
        })}
      </div>
      <p className="featured-p">
        View showtimes for all other movies showing
        <a
          href="https://numetro.co.za/now-showing/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Here!
        </a>
      </p>
      <p className="featured-p">
        Also, checkout our ticket prices and more savings
        <a
          href="https://numetro.co.za/price-matters/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Here!
        </a>
      </p>
    </>
  );
}

export default Featured;
