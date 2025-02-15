import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <h1 className="text-2xl font-bold">AI-Powered Interview Coach</h1>
        <p className="text-gray-600 mt-2">
          Get personalized interview questions based on a job description.
        </p>
        <Link href="/interview">
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
            Start Preparing
          </button>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap">
        <h1 className="mt-6 text-lg font-semibold">Footer</h1>
      </footer>
    </div>
  );
}
