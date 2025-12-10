import { BrowserRouter, Route, Routes } from 'react-router';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Authentication from './pages/Authentication';
import { AppRoutes } from './lib/appRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path={AppRoutes.Authentication} element={<Authentication />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
