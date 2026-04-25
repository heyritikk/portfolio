"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center bg-[var(--background)] justify-center h-screen text-center px-4 text-[var(--foreground)]">
      <h1 className="text-2xl md:text-3xl font-medium mb-4">
        Something went wrong
      </h1>

      <p className="text-[var(--muted)] mb-6">
        An unexpected error occurred. Please try again.
      </p>

      <button
        onClick={reset}
        className="text-white dark:text-gray-900 hover:underline bg-gray-900 dark:bg-gray-100 text-sm py-2 px-4 rounded-lg cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
