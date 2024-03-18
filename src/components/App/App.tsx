import { Route, Routes } from 'react-router-dom';
import { Layout } from '@app/components';
import { Home, NotFound } from '@app/pages';
import { ROUTES } from '@app/types';

/**
 * Defines the routes for the application
 * @returns {JSX.Element}
 */
const App = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Layout pageTitle="I'm an example!" />}>
        <Route index element={<Home />} />
      </Route>
      <Route path={ROUTES.ANY} element={<NotFound />} />
    </Routes>
  );
};

export default App;
