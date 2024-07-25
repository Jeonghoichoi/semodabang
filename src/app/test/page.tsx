import FromClient from './_ui/FromClient';
import FromServer from './_ui/FromServer';
import Link from 'next/link';
import { headers } from 'next/headers';
// import { unstable_noStore as noStore } from 'next/cache';

// export const revalidate = 0;
// export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
// export const fetchCache = 'force-no-store';

// export const revalidate = 40;

export default async function TestPage() {
  // noStore();
  // const headersList = headers();
  // const referer = headersList.get('referer');

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div>
        <FromClient />
      </div>
      <div>
        <FromServer />
      </div>
      <div>
        <Link
          href="/"
          prefetch={false}
        >
          go to home page
        </Link>
      </div>
    </main>
  );
}
