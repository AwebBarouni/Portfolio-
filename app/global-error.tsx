"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center px-6 text-center bg-white text-black dark:bg-black dark:text-white">
        <div className="max-w-lg">
          <h2 className="text-3xl font-Ovo mb-4">Application error</h2>
          <p className="mb-6 text-gray-600 dark:text-white/70">
            A critical error stopped the site from loading.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
