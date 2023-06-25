import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Chan Waturandang </span>
        from <span className={s.purple}> Timika, Papua.</span>
        <br />
        A student who has expertise in the field of FrontEnd{' '}
        <br />
        using React Native.
        <br />
        <br />
        I am now at the junior level of the computer science
        <br />
        faculty at <a href="https://www.unklab.ac.id/">Klabat University</a>.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Singing
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Riding
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
