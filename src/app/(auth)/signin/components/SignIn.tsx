'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    await signIn('github');
    router.push('/'); // Redirect after sign-in
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign in with Github</button>
    </div>
  );
};

export default SignIn;
