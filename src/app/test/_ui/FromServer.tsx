// import { headers } from 'next/headers';
// export const runtime = 'nodejs';
// export const dynamic = 'force-dynamic';

import { formatDate } from '@/mocks/handlers';

// export const fetchCache = 'force-no-store';
export default async function FromServer({ parentTimestamp }: { parentTimestamp?: string }) {
  // const headersList = headers();
  // const referer = headersList.get('referer');

  const now = new Date();
  const formattedTime = formatDate(now);

  const data = await fetch('http://localhost:9090/api/server/getTime', {
    // cache: 'no-store',
    next: {
      revalidate: 60,
    },
  });
  const { timestamp } = await data.json();
  console.log('FromServer 도착:', timestamp, formattedTime);
  return (
    <>
      {/* <div>Referer: {referer}</div> */}
      <div>From Server</div>
      <div>{parentTimestamp || timestamp}</div>
    </>
  );
}
