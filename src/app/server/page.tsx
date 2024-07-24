import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello Next.js Page',
  description: 'next desc',
};

const URL = 'https://dev-recipe.donots.co.kr/api/v2/main/info';

async function getMainInfoData() {
  await new Promise(resolve => setTimeout(resolve, 10000));
  const res = await fetch(URL);
  const data = res.json();
  // return JSON.stringify(data);
  return data;
}

export default async function MainPage() {
  const homeData = await getMainInfoData();

  return (
    <div>
      {homeData.code} {homeData.message}
    </div>
  );
}
