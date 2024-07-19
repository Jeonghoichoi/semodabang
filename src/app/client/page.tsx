'use client';

import { Button } from '@/shared/ui/button';
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

  return (
    <div>
      클라버전
      <Button
        variant="outline"
        size="sm"
      >
        123123
      </Button>
    </div>
  );
}
