import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for does not exist or may have been moved.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center bg-[var(--background)] justify-center h-screen text-center px-4 text-[var(--foreground)]">
      <h1 className="text-2xl md:text-3xl font-medium mb-4">
        404 &mdash; Page Not Found
      </h1>

      <p className="text-[var(--muted)] mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="text-white dark:text-gray-900 hover:underline bg-gray-900 dark:bg-gray-100 text-sm py-2 px-4 rounded-lg"
      >
        Go back home
      </Link>
    </div>
  );
}