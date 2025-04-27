import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_100px] h-dvh justify-center items-center w-dvw">
      <main className="flex flex-col gap-8 items-center w-full">
        <h1 className="text-3xl font-bold">AI-Powered Interview Coach</h1>
        <p className="text-gray-600 mt-2">
          Get personalized interview questions based on a job description.
        </p>
        <Link href="/interview">
          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-lg">
            Start Preparing
          </button>
        </Link>
      </main>
      <footer className="w-full p-4 border-t border-gray-100 absolute bottom-0 text-center">
        <h1 className="text-lg font-semibold">© Copyright 2025, kevinkarma.me.</h1>
      </footer>
    </div>
  );
}
