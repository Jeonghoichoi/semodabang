// 서버에서 api를 호출 후 렌더링!
export default async function FromServer() {
  const data = await fetch('http://localhost:9090/api/getTime', {
    cache: 'no-store', // fetch에 대한 설명은 2편에서 보고, 일단은 넘어가자.
  });
  const { timestamp } = await data.json();
  console.log('FromServer 도착:', timestamp);
  return (
    <>
      <div>From Server</div>
      <div>{timestamp}</div>
    </>
  );
}
