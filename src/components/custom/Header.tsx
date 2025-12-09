import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

import { LogIn, LogOut, User, UserPlus } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  onLogout: () => void;
  onSignup: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isAuthenticated,
  onLogin,
  onLogout,
  onSignup
}) => (
  <div className="flex justify-between items-center p-4 border-b">
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        {isAuthenticated && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>My Resumes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/resumes">View All</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>

    <div className="flex items-center space-x-4">
      {isAuthenticated && (
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          {/* A simple icon to represent the user profile button */}
          <User className="h-5 w-5" />
        </Button>
      )}
      {isAuthenticated ? (
        <Button onClick={onLogout} className="flex items-center space-x-2">
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      ) : (
        <>
          <Button
            onClick={onSignup}
            variant="ghost"
            className="flex items-center space-x-2"
          >
            <UserPlus className="h-4 w-4" />
            <span>Sign Up</span>
          </Button>
          <Button onClick={onLogin} className="flex items-center space-x-2">
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </Button>
        </>
      )}
    </div>
  </div>
);

export default Header;
