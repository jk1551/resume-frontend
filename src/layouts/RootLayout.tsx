import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';
import { Outlet } from 'react-router';

function RootLayout() {
  const login = () => {
    alert('logged in');
  };

  const logout = () => {
    alert('logged out');
  };

  const signup = () => {
    alert('signup');
  };

  return (
    <>
      <Header
        isAuthenticated={false}
        onLogin={login}
        onLogout={logout}
        onSignup={signup}
      />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
