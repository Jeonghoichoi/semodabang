import { MainContents } from '@/entities/main';
import Link from 'next/link';

export default function AppPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <MainContents />
        <Link href="/test">go to test page</Link>
      </main>
    </>
  );
}
