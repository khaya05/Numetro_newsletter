import banner from '../../assets/GOTGv3_1500x500.png';
import Banner from '../Banner/Banner';
import Heading from '../Heading/Heading';

function GOTG() {
  return (
    <section className="news-letter-section">
      <Heading heading="SEE IT FIRST!" />
      <Banner
        banner={banner}
        name="GUARDIANS OF THE GALAXY VOL. 3"
        movieLink="https://numetro.co.za/movie/4322/"
      />
      <p>
        Have you booked your tickets yet for Marvel Studios’{' '}
        <a
          href="https://numetro.co.za/movie/4322/"
          target="_blank"
          rel="noreferrer"
        >
          GUARDIANS OF THE GALAXY VOL. 3
        </a>
        ? See it first on <span>Thursday, 4 May 2023,</span> at the special
        pre-release screenings in our cinemas nationwide – including the
        super-power of our <span className='red'>4DX</span> and Xtreme cinema Xperiences.
      </p>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default GOTG;
