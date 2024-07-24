import FromClient from '@/widgets/test/FromClient';
import FromServer from '@/widgets/test/FromServer';
import Link from 'next/link';
import { headers } from 'next/headers';
import { unstable_noStore as noStore } from 'next/cache';

export const revalidate = 0;
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function TestPage() {
  noStore();
  const headersList = headers();
  const referer = headersList.get('referer');

  const data = await fetch('http://localhost:9090/api/server/getTime', {
    cache: 'no-store',
    // next: {
    //   revalidate: 0,
    // },
  });
  const { timestamp } = await data.json();
  console.log('TestPage 도착:', timestamp);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Referer: {referer}</div>
      <div>
        <FromClient />
      </div>
      <div>
        <FromServer parentTimestamp={timestamp} />
      </div>
      <Link
        href="/"
        prefetch={false}
      >
        go to home page
      </Link>
    </main>
  );
}
