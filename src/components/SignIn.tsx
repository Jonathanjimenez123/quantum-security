import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { handleFirestoreError, OperationType } from '../utils/firestoreErrorHandler';

interface SignInProps {
  onSignIn: () => void;
  onHelpClick?: () => void;
  onSignUpClick?: () => void;
}

// Add global type for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function SignIn({ onSignIn, onHelpClick, onSignUpClick }: SignInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user document exists, if not create it
      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
            role: 'user', // Default role
            createdAt: new Date().toISOString()
          });
        }
      } catch (firestoreErr) {
        handleFirestoreError(firestoreErr, OperationType.CREATE, `users/${user.uid}`);
      }

      onSignIn();
    } catch (err: any) {
      console.error(err);
      if (err?.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled. Please try again.');
      } else if (err?.code === 'auth/operation-not-allowed') {
        setError('Google Sign-In is not enabled. Please enable it in your Firebase Console under Authentication > Sign-in method.');
      } else {
        setError(`Failed to sign in with Google: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      try {
        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);
        
        if (!userSnap.exists()) {
          await setDoc(userRef, {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
            role: 'user',
            createdAt: new Date().toISOString()
          });
        }
      } catch (firestoreErr) {
        handleFirestoreError(firestoreErr, OperationType.CREATE, `users/${user.uid}`);
      }

      onSignIn();
    } catch (err: any) {
      console.error(err);
      if (err?.code === 'auth/popup-closed-by-user') {
        setError('Sign-in was cancelled. Please try again.');
      } else if (err?.code === 'auth/operation-not-allowed') {
        setError('GitHub Sign-In is not enabled. Please enable it in your Firebase Console under Authentication > Sign-in method.');
      } else {
        setError(`Failed to sign in with GitHub: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[700px]">
        {/* Left Side: Visual / Branding */}
        <div 
          className="hidden md:flex flex-col relative w-1/2 p-12 justify-between bg-cover bg-center" 
          data-alt="Abstract futuristic cybersecurity shield and data streams" 
          style={{ backgroundImage: 'linear-gradient(rgba(19, 91, 236, 0.8), rgba(16, 22, 34, 0.9)), url("https://lh3.googleusercontent.com/aida/ADBb0uhTToequtz_clWQu7_L-PM0iM7UeHnoPMViNJGxorBX4krGCXWQ_ewRJVVEmYs-GPupQcOywx3-ZsPu4oJY3g82yx1IqwTIhBhb-v4zZFsKuPbByAUb432l0dErzt7yRImXb8sXTEGCfOp7ErXlaZbZ8ntg-wiOrMZC2oi3HXr1zjzIoIV5T_0WDBOVovhRKRQiWMbJV4hgADrFnJOpfDmyqaWJZli2UuJqsD3ywVSiXelbSbIPOnMhht4ztlmXvvqcln_zvBNVFg")' }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <span className="material-symbols-outlined text-white text-4xl">shield_lock</span>
              <span className="text-white text-xl font-bold tracking-wider">AI Shield</span>
            </div>
          </div>
          <div className="relative z-10 flex flex-col gap-4">
            <h1 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
              Secure your digital footprint with AI
            </h1>
            <p className="text-slate-200 text-lg font-normal leading-relaxed max-w-md">
              Real-time AI Anti-phishing security that evolves with the threat landscape to keep you safe.
            </p>
          </div>
          {/* Subtle decoration */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent pointer-events-none"></div>
        </div>
        
        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#151a25]">
          <div className="max-w-[400px] w-full mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Welcome back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
            </div>
            
            <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); onSignIn(); }}>
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                  {error}
                </div>
              )}
              {/* Email Input */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email address</span>
                <div className="relative group">
                  <input 
                    className="form-input block w-full rounded-lg border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 transition-colors placeholder:text-slate-400 outline-none" 
                    placeholder="Enter your email" 
                    type="email"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                </div>
              </label>
              
              {/* Password Input */}
              <label className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Contraseña</span>
                <div className="relative group">
                  <input 
                    className="form-input block w-full rounded-lg border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-surface-dark text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-12 px-4 transition-colors placeholder:text-slate-400 outline-none" 
                    placeholder="Enter your password" 
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button 
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </button>
                </div>
              </label>
              
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input 
                    className="h-4 w-4 rounded border-slate-300 dark:border-border-dark bg-transparent text-primary focus:ring-primary checked:bg-primary checkbox-tick transition-colors" 
                    type="checkbox"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">Remember me</span>
                </label>
                <Link className="text-sm font-medium text-primary hover:text-primary/80 transition-colors" to='/panel'>Forgot password?</Link>
              </div>
              
              {/* Sign In Button */}
              <button 
                type="submit"
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
              >
                <span>Iniciar Sesión</span>
                <span className="material-symbols-outlined text-lg">login</span>
              </button>
            </form>
            
            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-border-dark"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-[#151a25] px-2 text-slate-500">Or continue with</span>
              </div>
            </div>
            
            {/* Social Login */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button 
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                  className="flex-1 flex items-center justify-center gap-2 h-11 border border-slate-300 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-surface-dark transition-colors bg-white dark:bg-transparent text-slate-700 dark:text-white font-medium disabled:opacity-50"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  {isLoading ? 'Signing in...' : 'Google'}
                </button>
                <button 
                  type="button"
                  onClick={handleGithubSignIn}
                  disabled={isLoading}
                  className="flex-1 flex items-center justify-center gap-2 h-11 border border-slate-300 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-surface-dark transition-colors bg-white dark:bg-transparent text-slate-700 dark:text-white font-medium disabled:opacity-50"
                >
                  <svg className="h-5 w-5 dark:fill-white fill-slate-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                  </svg>
                  GitHub
                </button>
              </div>
              {/* <button 
                type="button"
                onClick={handleMetaMaskSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 h-11 border border-[#F6851B] dark:border-[#F6851B] rounded-lg hover:bg-[#F6851B]/10 transition-colors bg-white dark:bg-transparent text-[#F6851B] font-medium disabled:opacity-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 111 111" xmlns="http://www.w3.org/2000/svg">
                  <path d="M102.49 61.32c-1.35-2.28-3.08-4.32-5.11-6.04-2.03-1.72-4.33-3.11-6.81-4.11-2.48-1-5.12-1.58-7.81-1.72-2.69-.14-5.4.15-8.01.86-2.61.71-5.08 1.83-7.31 3.32-2.23 1.49-4.19 3.32-5.81 5.41-1.62 2.09-2.88 4.41-3.73 6.88-.85 2.47-1.27 5.06-1.24 7.66.03 2.6.51 5.17 1.42 7.61.91 2.44 2.22 4.72 3.88 6.75 1.66 2.03 3.65 3.79 5.89 5.2 2.24 1.41 4.7 2.45 7.29 3.08 2.59.63 5.27.84 7.94.62 2.67-.22 5.28-.86 7.73-1.9 2.45-1.04 4.71-2.47 6.69-4.23 1.98-1.76 3.66-3.83 4.97-6.13 1.31-2.3 2.23-4.8 2.73-7.41.5-2.61.58-5.29.23-7.94-.35-2.65-1.12-5.22-2.28-7.62-1.16-2.4-2.7-4.58-4.56-6.44-1.86-1.86-4.04-3.4-6.44-4.56-2.4-1.16-4.97-1.93-7.62-2.28-2.65-.35-5.33-.27-7.94.23-2.61.5-5.11 1.42-7.41 2.73-2.3 1.31-4.37 2.99-6.13 4.97-1.76 1.98-3.19 4.24-4.23 6.69-1.04 2.45-1.68 5.06-1.9 7.73-.22 2.67-.01 5.35.62 7.94.63 2.59 1.67 5.05 3.08 7.29 1.41 2.24 3.17 4.23 5.2 5.89 2.03 1.66 4.31 2.97 6.75 3.88 2.44.91 5.01 1.39 7.61 1.42 2.6.03 5.19-.39 7.66-1.24 2.47-.85 4.79-2.11 6.88-3.73 2.09-1.62 3.92-3.58 5.41-5.81 1.49-2.23 2.61-4.7 3.32-7.31.71-2.61 1-5.32.86-8.01-.14-2.69-.72-5.33-1.72-7.81-1-2.48-2.39-4.78-4.11-6.81-1.72-2.03-3.76-3.76-6.04-5.11z" fill="#E17726"></path>
                  <path d="M102.49 61.32c-1.35-2.28-3.08-4.32-5.11-6.04-2.03-1.72-4.33-3.11-6.81-4.11-2.48-1-5.12-1.58-7.81-1.72-2.69-.14-5.4.15-8.01.86-2.61.71-5.08 1.83-7.31 3.32-2.23 1.49-4.19 3.32-5.81 5.41-1.62 2.09-2.88 4.41-3.73 6.88-.85 2.47-1.27 5.06-1.24 7.66.03 2.6.51 5.17 1.42 7.61.91 2.44 2.22 4.72 3.88 6.75 1.66 2.03 3.65 3.79 5.89 5.2 2.24 1.41 4.7 2.45 7.29 3.08 2.59.63 5.27.84 7.94.62 2.67-.22 5.28-.86 7.73-1.9 2.45-1.04 4.71-2.47 6.69-4.23 1.98-1.76 3.66-3.83 4.97-6.13 1.31-2.3 2.23-4.8 2.73-7.41.5-2.61.58-5.29.23-7.94-.35-2.65-1.12-5.22-2.28-7.62-1.16-2.4-2.7-4.58-4.56-6.44-1.86-1.86-4.04-3.4-6.44-4.56-2.4-1.16-4.97-1.93-7.62-2.28-2.65-.35-5.33-.27-7.94.23-2.61.5-5.11 1.42-7.41 2.73-2.3 1.31-4.37 2.99-6.13 4.97-1.76 1.98-3.19 4.24-4.23 6.69-1.04 2.45-1.68 5.06-1.9 7.73-.22 2.67-.01 5.35.62 7.94.63 2.59 1.67 5.05 3.08 7.29 1.41 2.24 3.17 4.23 5.2 5.89 2.03 1.66 4.31 2.97 6.75 3.88 2.44.91 5.01 1.39 7.61 1.42 2.6.03 5.19-.39 7.66-1.24 2.47-.85 4.79-2.11 6.88-3.73 2.09-1.62 3.92-3.58 5.41-5.81 1.49-2.23 2.61-4.7 3.32-7.31.71-2.61 1-5.32.86-8.01-.14-2.69-.72-5.33-1.72-7.81-1-2.48-2.39-4.78-4.11-6.81-1.72-2.03-3.76-3.76-6.04-5.11z" fill="#E27625"></path>
                  <path d="M102.49 61.32c-1.35-2.28-3.08-4.32-5.11-6.04-2.03-1.72-4.33-3.11-6.81-4.11-2.48-1-5.12-1.58-7.81-1.72-2.69-.14-5.4.15-8.01.86-2.61.71-5.08 1.83-7.31 3.32-2.23 1.49-4.19 3.32-5.81 5.41-1.62 2.09-2.88 4.41-3.73 6.88-.85 2.47-1.27 5.06-1.24 7.66.03 2.6.51 5.17 1.42 7.61.91 2.44 2.22 4.72 3.88 6.75 1.66 2.03 3.65 3.79 5.89 5.2 2.24 1.41 4.7 2.45 7.29 3.08 2.59.63 5.27.84 7.94.62 2.67-.22 5.28-.86 7.73-1.9 2.45-1.04 4.71-2.47 6.69-4.23 1.98-1.76 3.66-3.83 4.97-6.13 1.31-2.3 2.23-4.8 2.73-7.41.5-2.61.58-5.29.23-7.94-.35-2.65-1.12-5.22-2.28-7.62-1.16-2.4-2.7-4.58-4.56-6.44-1.86-1.86-4.04-3.4-6.44-4.56-2.4-1.16-4.97-1.93-7.62-2.28-2.65-.35-5.33-.27-7.94.23-2.61.5-5.11 1.42-7.41 2.73-2.3 1.31-4.37 2.99-6.13 4.97-1.76 1.98-3.19 4.24-4.23 6.69-1.04 2.45-1.68 5.06-1.9 7.73-.22 2.67-.01 5.35.62 7.94.63 2.59 1.67 5.05 3.08 7.29 1.41 2.24 3.17 4.23 5.2 5.89 2.03 1.66 4.31 2.97 6.75 3.88 2.44.91 5.01 1.39 7.61 1.42 2.6.03 5.19-.39 7.66-1.24 2.47-.85 4.79-2.11 6.88-3.73 2.09-1.62 3.92-3.58 5.41-5.81 1.49-2.23 2.61-4.7 3.32-7.31.71-2.61 1-5.32.86-8.01-.14-2.69-.72-5.33-1.72-7.81-1-2.48-2.39-4.78-4.11-6.81-1.72-2.03-3.76-3.76-6.04-5.11z" fill="#D7C1B3"></path>
                  <path d="M102.49 61.32c-1.35-2.28-3.08-4.32-5.11-6.04-2.03-1.72-4.33-3.11-6.81-4.11-2.48-1-5.12-1.58-7.81-1.72-2.69-.14-5.4.15-8.01.86-2.61.71-5.08 1.83-7.31 3.32-2.23 1.49-4.19 3.32-5.81 5.41-1.62 2.09-2.88 4.41-3.73 6.88-.85 2.47-1.27 5.06-1.24 7.66.03 2.6.51 5.17 1.42 7.61.91 2.44 2.22 4.72 3.88 6.75 1.66 2.03 3.65 3.79 5.89 5.2 2.24 1.41 4.7 2.45 7.29 3.08 2.59.63 5.27.84 7.94.62 2.67-.22 5.28-.86 7.73-1.9 2.45-1.04 4.71-2.47 6.69-4.23 1.98-1.76 3.66-3.83 4.97-6.13 1.31-2.3 2.23-4.8 2.73-7.41.5-2.61.58-5.29.23-7.94-.35-2.65-1.12-5.22-2.28-7.62-1.16-2.4-2.7-4.58-4.56-6.44-1.86-1.86-4.04-3.4-6.44-4.56-2.4-1.16-4.97-1.93-7.62-2.28-2.65-.35-5.33-.27-7.94.23-2.61.5-5.11 1.42-7.41 2.73-2.3 1.31-4.37 2.99-6.13 4.97-1.76 1.98-3.19 4.24-4.23 6.69-1.04 2.45-1.68 5.06-1.9 7.73-.22 2.67-.01 5.35.62 7.94.63 2.59 1.67 5.05 3.08 7.29 1.41 2.24 3.17 4.23 5.2 5.89 2.03 1.66 4.31 2.97 6.75 3.88 2.44.91 5.01 1.39 7.61 1.42 2.6.03 5.19-.39 7.66-1.24 2.47-.85 4.79-2.11 6.88-3.73 2.09-1.62 3.92-3.58 5.41-5.81 1.49-2.23 2.61-4.7 3.32-7.31.71-2.61 1-5.32.86-8.01-.14-2.69-.72-5.33-1.72-7.81-1-2.48-2.39-4.78-4.11-6.81-1.72-2.03-3.76-3.76-6.04-5.11z" fill="#233447"></path>
                  <path d="M102.49 61.32c-1.35-2.28-3.08-4.32-5.11-6.04-2.03-1.72-4.33-3.11-6.81-4.11-2.48-1-5.12-1.58-7.81-1.72-2.69-.14-5.4.15-8.01.86-2.61.71-5.08 1.83-7.31 3.32-2.23 1.49-4.19 3.32-5.81 5.41-1.62 2.09-2.88 4.41-3.73 6.88-.85 2.47-1.27 5.06-1.24 7.66.03 2.6.51 5.17 1.42 7.61.91 2.44 2.22 4.72 3.88 6.75 1.66 2.03 3.65 3.79 5.89 5.2 2.24 1.41 4.7 2.45 7.29 3.08 2.59.63 5.27.84 7.94.62 2.67-.22 5.28-.86 7.73-1.9 2.45-1.04 4.71-2.47 6.69-4.23 1.98-1.76 3.66-3.83 4.97-6.13 1.31-2.3 2.23-4.8 2.73-7.41.5-2.61.58-5.29.23-7.94-.35-2.65-1.12-5.22-2.28-7.62-1.16-2.4-2.7-4.58-4.56-6.44-1.86-1.86-4.04-3.4-6.44-4.56-2.4-1.16-4.97-1.93-7.62-2.28-2.65-.35-5.33-.27-7.94.23-2.61.5-5.11 1.42-7.41 2.73-2.3 1.31-4.37 2.99-6.13 4.97-1.76 1.98-3.19 4.24-4.23 6.69-1.04 2.45-1.68 5.06-1.9 7.73-.22 2.67-.01 5.35.62 7.94.63 2.59 1.67 5.05 3.08 7.29 1.41 2.24 3.17 4.23 5.2 5.89 2.03 1.66 4.31 2.97 6.75 3.88 2.44.91 5.01 1.39 7.61 1.42 2.6.03 5.19-.39 7.66-1.24 2.47-.85 4.79-2.11 6.88-3.73 2.09-1.62 3.92-3.58 5.41-5.81 1.49-2.23 2.61-4.7 3.32-7.31.71-2.61 1-5.32.86-8.01-.14-2.69-.72-5.33-1.72-7.81-1-2.48-2.39-4.78-4.11-6.81-1.72-2.03-3.76-3.76-6.04-5.11z" fill="#CC6228"></path>
                  <path d="M102.49 61.32c-1.35-2.28-3.08-4.32-5.11-6.04-2.03-1.72-4.33-3.11-6.81-4.11-2.48-1-5.12-1.58-7.81-1.72-2.69-.14-5.4.15-8.01.86-2.61.71-5.08 1.83-7.31 3.32-2.23 1.49-4.19 3.32-5.81 5.41-1.62 2.09-2.88 4.41-3.73 6.88-.85 2.47-1.27 5.06-1.24 7.66.03 2.6.51 5.17 1.42 7.61.91 2.44 2.22 4.72 3.88 6.75 1.66 2.03 3.65 3.79 5.89 5.2 2.24 1.41 4.7 2.45 7.29 3.08 2.59.63 5.27.84 7.94.62 2.67-.22 5.28-.86 7.73-1.9 2.45-1.04 4.71-2.47 6.69-4.23 1.98-1.76 3.66-3.83 4.97-6.13 1.31-2.3 2.23-4.8 2.73-7.41.5-2.61.58-5.29.23-7.94-.35-2.65-1.12-5.22-2.28-7.62-1.16-2.4-2.7-4.58-4.56-6.44-1.86-1.86-4.04-3.4-6.44-4.56-2.4-1.16-4.97-1.93-7.62-2.28-2.65-.35-5.33-.27-7.94.23-2.61.5-5.11 1.42-7.41 2.73-2.3 1.31-4.37 2.99-6.13 4.97-1.76 1.98-3.19 4.24-4.23 6.69-1.04 2.45-1.68 5.06-1.9 7.73-.22 2.67-.01 5.35.62 7.94.63 2.59 1.67 5.05 3.08 7.29 1.41 2.24 3.17 4.23 5.2 5.89 2.03 1.66 4.31 2.97 6.75 3.88 2.44.91 5.01 1.39 7.61 1.42 2.6.03 5.19-.39 7.66-1.24 2.47-.85 4.79-2.11 6.88-3.73 2.09-1.62 3.92-3.58 5.41-5.81 1.49-2.23 2.61-4.7 3.32-7.31.71-2.61 1-5.32.86-8.01-.14-2.69-.72-5.33-1.72-7.81-1-2.48-2.39-4.78-4.11-6.81-1.72-2.03-3.76-3.76-6.04-5.11z" fill="#E27625"></path>
                </svg>
                MetaMask
              </button> */}
            </div>
            
            <p className="text-center mt-8 text-sm text-slate-500">
              Don't have an account? <button onClick={onSignUpClick} className="text-primary hover:text-primary/80 font-medium">Sign up for free</button>

            </p>
            <p className="text-center mt-2 text-sm text-slate-500">
              Need help? <button onClick={onHelpClick} className="text-primary hover:text-primary/80 font-medium">Visit Help Center</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
