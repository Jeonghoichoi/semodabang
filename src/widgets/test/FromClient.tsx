// 클라이언트에서 api를 호출 후 렌더링!
'use client';

import { useEffect, useState } from 'react';
import { useSequentialRequest } from '@/shared/lib/useSequentialRequest';

export default function FromClient() {
  const [timestamp, setTimestamp] = useState(0);

  const run = useSequentialRequest(async (signal: AbortSignal, query: string) => fetch(`${query}`, { signal, cache: 'no-store' }).then(res => res));

  useEffect(() => {
    const getData = async () => {
      const data = await run('http://localhost:9090/api/getTime');
      const { timestamp } = (await data?.json()) || { timestamp: '실패' };
      setTimestamp(timestamp);
    };
    getData();
  }, []);

  return (
    <>
      <div>From Client</div>
      <div>{timestamp}</div>
    </>
  );
}
