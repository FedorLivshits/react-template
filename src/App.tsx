import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import { LoginPage } from '@pages/LoginPage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { PrivateRoute, PublicRoute } from '@shared/routes';
import { ProviderComponent } from './ProviderComponent';
import { ROUTES_URLS } from '@shared/constants';

const { LOGIN, MAIN, NOT_FOUND } = ROUTES_URLS;

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={LOGIN}
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path={MAIN} element={<PrivateRoute>Page 1</PrivateRoute>} />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <ProviderComponent>
      <AppRoutes />
    </ProviderComponent>
  );
};

export default App;
