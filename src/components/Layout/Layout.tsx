import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import s from './Layout.module.scss';
import { Header, Footer } from '@app/components';

/**
 * Props Type Interface for {@link Layout}
 */
export interface LayoutProps {
  /**
   * The HTML Page Title
   */
  pageTitle?: string;
}

/**
 * Component which defines the layout of each page
 * @param {LayoutProps} props
 * @returns {JSX.Element}
 */
const Layout = ({ pageTitle }: LayoutProps): JSX.Element => {
  return (
    <div className={s.wrapper}>
      <Helmet>{pageTitle && <title>{pageTitle}</title>}</Helmet>

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
