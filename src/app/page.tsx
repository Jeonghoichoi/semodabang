import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello Next.js Page",
  description: "next desc",
};

const URL = "https://dev-recipe.donots.co.kr/api/v2/main/info";

async function getMainInfoData() {
  const res = await fetch(URL);
  const data = res.json();
  return JSON.stringify(data);
}

async function MainPage() {
  const mainData = await getMainInfoData();
  return <div>{mainData}</div>;
}

export default MainPage;
