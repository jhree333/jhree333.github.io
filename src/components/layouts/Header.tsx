import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 border-b z-1 bg-white">
      <nav className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          <h1>jhree333</h1>
        </Link>
        <Link href="https://github.com/jhree333">github</Link>
      </nav>
    </header>
  );
}
