'use client'

import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <h2 className="text-3xl font-Ovo mb-4">Something went wrong</h2>
        <p className="mb-6 text-gray-600 dark:text-white/70">
          The page could not render right now. You can try again or reload the site.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
        >
          Try again
        </button>
      </div>
    </div>
  );
}