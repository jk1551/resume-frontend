import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import { AppRoutes } from '@/lib/appRoutes';
import { Outlet, useNavigate } from 'react-router';

function RootLayout() {
  const navigate = useNavigate();
  const auth = () => {
    navigate(AppRoutes.Authentication);
  };

  const logout = () => {
    alert('logged out');
  };

  return (
    <>
      <Header
        isAuthenticated={false}
        onLogin={auth}
        onLogout={logout}
        onSignup={auth}
      />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
