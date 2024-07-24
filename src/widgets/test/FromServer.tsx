import { headers } from 'next/headers';
export const revalidate = 0;
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export default async function FromServer({ parentTimestamp }: { parentTimestamp?: string }) {
  const headersList = headers();
  const referer = headersList.get('referer');

  const data = await fetch('http://localhost:9090/api/server/getTime', {
    cache: 'no-store',
    // next: {
    //   revalidate: 0,
    // },
  });
  const { timestamp } = await data.json();
  console.log('FromServer 도착:', timestamp);
  return (
    <>
      <div>Referer: {referer}</div>
      <div>From Server</div>
      <div>{parentTimestamp || timestamp}</div>
    </>
  );
}
