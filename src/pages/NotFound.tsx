import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { FC } from 'react';
import { useNavigate } from 'react-router';

const NotFound: FC<{}> = () => {
  const navigate = useNavigate();

  const handleGoHome: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/');
  };

  return (
    <div className="flex h-screen items-center justify-center flex-col p-4">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-6">
        Page Not Found
      </p>
      <p className="text-lg text-gray-600 mb-8 max-w-md text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Button onClick={handleGoHome} className="flex items-center space-x-2">
        <ArrowLeft className="h-4 w-4" />
        <span>Return Home</span>
      </Button>
    </div>
  );
};

export default NotFound;
