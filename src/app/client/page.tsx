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

  return <div>클라버전</div>;
}
