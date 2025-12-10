import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

import { ForgotPasswordFormComp } from '../forms/ForgotPasswordFormComp';
import { LoginFormComp } from '../forms/LoginFormComp';
import { SignupFormComp } from '../forms/SignupFormComp';

export default function AuthenticationCard() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'forgot'>(
    'login'
  );

  // Helper to handle switching to the Forgot Password tab
  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab('forgot');
  };

  return (
    <Card className="w-[380px] shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">
          {activeTab === 'login' && 'Welcome Back'}
          {activeTab === 'signup' && 'Create Your Account'}
          {activeTab === 'forgot' && 'Reset Password'}
        </CardTitle>
        <CardDescription>
          {activeTab !== 'forgot'
            ? 'Enter your details below to get started.'
            : 'Enter your email to receive a password reset link.'}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as 'login' | 'signup' | 'forgot')
          }
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-6">
            <LoginFormComp />
            <div className="mt-4 text-center">
              <a
                href="#"
                onClick={handleForgotPasswordClick}
                className="text-sm text-gray-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </TabsContent>

          <TabsContent value="signup" className="mt-6">
            <SignupFormComp />
          </TabsContent>

          <TabsContent value="forgot" className="mt-6">
            <ForgotPasswordFormComp />
            <div className="mt-4 text-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab('login');
                }}
                className="text-sm text-gray-500 hover:underline"
              >
                Go back to Login
              </a>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
