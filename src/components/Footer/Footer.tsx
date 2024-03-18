import s from './Footer.module.scss';

/**
 * Component which defines the footer of the page
 * @returns {JSX.Element}
 */
const Footer = (): JSX.Element => {
  return (
    <footer className={s.wrapper}>
      <p>This is the footer!</p>
    </footer>
  );
};

export default Footer;
