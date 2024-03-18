import s from './Header.module.scss';

/**
 * Component which defines the header of the page
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
  return (
    <header className={s.wrapper}>
      <p>This is where your header goes!</p>
    </header>
  );
};

export default Header;
