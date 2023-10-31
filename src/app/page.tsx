import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-center mb-4">Gotta cache &apos;em all</h1>
      <Link href="/pikachu" className="link-light">Pikachu</Link>
    </main>
  )
}
