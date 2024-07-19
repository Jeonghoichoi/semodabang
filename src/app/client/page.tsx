'use client';

import { useState, useEffect } from 'react';
export default function MainPage() {
  const [resData, setResData] = useState();

  const getData = async () => {
    const res = fetch('https://dev-recipe.donots.co.kr/api/v2/main/info');
    const data = await (await res).json();
    setResData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(resData);

  return (
    <div>
      클라버전
      <div className="text-gray-400">태일윈드 테슷트</div>
      <div className="font-14">123123</div>
      <div className="w-full">tttt</div>
    </div>
  );
}
