import s from './NotFound.module.scss';

/**
 * Component which describes the 404 Page
 * @returns {JSX.Element}
 */
const NotFound = (): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <p>Page not found!</p>
    </div>
  );
};

export default NotFound;
