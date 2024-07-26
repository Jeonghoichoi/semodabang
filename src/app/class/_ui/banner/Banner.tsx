'use client';

import { useState } from 'react';
import Image from 'next/image';

const banners = [
  { id: 1, title: '미래 전기 차량 VR 운전 체험 플랫폼 서비스 단독 런칭!', image: '/images/banner1.jpg' },
  // ... 더 많은 배너
];

export function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);

  return (
    <>
      <div className="relative w-[343px] h-20 mx-auto mt-28 rounded-xl overflow-hidden">
        <Image
          src={banners[currentBanner].image}
          alt="Banner"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute inset-0 bg-opacity-40 p-5 flex flex-col justify-between">
          {/* <p className="text-sm font-bold text-white leading-tight">{banners[currentBanner].title}</p> */}
          <div className="self-end bg-[#131417] bg-opacity-90 rounded px-1.5 py-0.5 text-xs text-white">
            {currentBanner + 1}/{banners.length}
          </div>
        </div>
      </div>
    </>
  );
}
