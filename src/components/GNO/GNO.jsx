import poster from '../../assets/GNO_LoveAgain_newsletter.png';
import Banner from '../Banner/Banner';
import Heading from '../Heading/Heading';

function GNO() {
  return (
    <section className="news-letter-section">
      <Heading heading="THIS ONE’S FOR THE GIRLS" />
      <Banner
        banner={poster}
        movieLink="https://numetro.co.za/movie/6371/"
        name="Girls’ Night Out"
      />
      <p>
        Feel the love at{' '}
        <a
          href="https://numetro.co.za/movie/6371/"
          target="_blank"
          rel="noreferrer"
        >
          Girls’ Night Out{' '}
        </a>
        <span className="italic">(sponsored by Absa Rewards)</span> on{' '}
        <span className="date">
          Thursday, 11 May 2023, at 19:30
          <span className="italic">(event starts at 18:30) </span>
        </span>
        We will wow you with another stand-out GNO experience – featuring a
        special pre-release screening of{' '}
        <a
          href="https://numetro.co.za/movie/6371/"
          target="_blank"
          rel="noreferrer"
        >
          LOVE AGAIN
        </a>
        . This highly anticipated new romantic comedy- drama promises to win
        your heart – featuring new music by{' '}
        <span className="strong">Celine Dion</span> and starring{' '}
        <span className="strong">Priyanka Chopra Jonas</span>.
      </p>
    </section>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default GNO;
