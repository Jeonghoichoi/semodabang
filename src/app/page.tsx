import Link from 'next/link';

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Hello world</div>
        <Link href="/test">go to test page</Link>
      </main>
    </>
  );
}
