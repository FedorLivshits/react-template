import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProviderComponent } from './ProviderComponent';
import { PrivateRoute, PublicRoute } from './routes';
import { ROUTES_URLS } from './constants';
import './index.css';
import { LoginPage, NotFoundPage } from './pages';

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
