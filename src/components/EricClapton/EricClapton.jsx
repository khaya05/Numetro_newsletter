import banner from "../../assets/Newsletter.jpg"
import Banner from "../Banner/Banner";
import Heading from "../Heading/Heading";

function EricClapton() {
  return (
    <section className="news-letter-section">
      <Heading heading={'ERIC CLAPTON IN VIP'} />
      <Banner
        banner={banner}
        name="ERIC CLAPTON"
        movieLink="https://numetro.co.za/movie/6391/"
      />
      <p>
        In the early 1990s, Eric Clapton played 24 nights at the Royal Albert
        Hall performing with different line-ups and sets featuring blues, rock,
        and a full orchestra showcasing all his classic hits – also including a
        guest performance by Phil Collins.
      <br />
      <br />
        The shows have become legendary to
        Eric Clapton fans and now 30 years later, you can experience{' '}
        <a
          href="https://numetro.co.za/movie/6391/"
          target="_blank"
          rel="noreferrer"
        >
          ERIC CLAPTON: ACROSS 24 NIGHTS{' '}
        </a>{' '}
        with remastered Dolby Surround sound in our luxurious VIP cinemas on
        <span className="date">{ " "}Sunday, 17 May</span>, and{' '}
        <span className="date">Tuesday, 21 May 2023</span>. This special cinema event captures
        for the first time the music legend’s definitive performances.
      </p>
    </section>
  );
}

export default EricClapton