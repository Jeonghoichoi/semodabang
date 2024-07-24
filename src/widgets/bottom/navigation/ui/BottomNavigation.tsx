'use client';

import { useState } from 'react';
import { Icon } from '@/shared/ui/button/Icon';

const navItems = [
  {
    key: 'home',
    name: '홈',
    link: '/home',
    icon: 'home' as const,
  },
  {
    key: 'class',
    name: '세모클래스',
    link: '/class',
    icon: 'class' as const,
  },
  {
    key: 'book',
    name: '세모책',
    link: '/book',
    icon: 'book' as const,
  },
  {
    key: 'note',
    name: '세모노트',
    link: '/note',
    icon: 'note' as const,
  },
  {
    key: 'my',
    name: '마이',
    link: '/my',
    icon: 'profile' as const,
  },
];

export function BottomNavigation() {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <nav className="fixed w-full max-w-[640px] bottom-0 left-0 right-0 h-20 bg-white my-0 mx-auto shadow-top">
      <div className="flex justify-around items-center h-14">
        {navItems.map(item => (
          <button
            key={item.key}
            className="flex flex-col items-center"
            onClick={() => setActiveItem(item.key)}
          >
            <Icon
              name={item.icon}
              className={`w-8 h-8 ${activeItem === item.key ? 'text-[#2CADAF]' : 'text-gray-600'}`}
            />
            <span className={`text-xs ${activeItem === item.key ? 'text-[#2CADAF]' : 'text-gray-600'}`}>{item.name}</span>
          </button>
        ))}
      </div>
      <div className="h-1 w-[134px] bg-black rounded-full mx-auto"></div>
    </nav>
  );
}
