import banner from '../../assets/Avatar2_newsletter.jpg'
import Heading from '../Heading/Heading';
import Banner from '../Banner/Banner';

function Avatar() {
  return (
    <section className="news-letter-section">
      <Heading heading={'AVATAR: THE WAY OF WATER'} />
      <Banner
        banner={banner}
        name="Avatar"
        movieLink='"https://numetro.co.za/movie/2993/"'
      />
      <p>
        From tomorrow, you have one last chance to Xperience the record-breaking
        box office hit,{' '}
        <a
          href="https://numetro.co.za/movie/2993/"
          target="_blank"
          rel="noreferrer"
        >
          AVATAR: THE WAY OF WATER
        </a>{' '}
        , in our larger-than-life Xtreme and multi-sensory{' '}
        <span className="red">4DX </span>
        cinemas – for one week only{' '}
        <span className="date">21-26 April 2023</span>.
      <br />
      <br />
        In Xtreme, this
        spectacular movie adventure will be showcased on some of SA’s largest
        cinema screens, with advanced 3D visuals, laser projection and
        ground-breaking Dolby Atmos sound. Feel the action in the{' '}
        <span className='red'>4DX</span> motion seats – with added in-cinema effects such as
        wind, water, fog, lightning and lots more – exclusive to{' '}
        <span className='orange'>Nu Metro!</span>
      </p>
    </section>
  );
}

export default Avatar;
