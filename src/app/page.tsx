import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-100">
      <section className="container flex h-full w-full flex-col place-items-center bg-red-400">
        <h1 className="self-center">
          Welcome to <Link href="/about">Raid Roster</Link>!
        </h1>
      </section>
    </main>
  );
}
