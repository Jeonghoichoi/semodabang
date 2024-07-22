import { Class } from '@/entities/class';

const mockClasses: Class[] = [
  {
    id: 1,
    title: '여행처럼, 소풍처럼 즐거운 1박 2일 팜스테이',
    image: '/images/class1.jpg',
    tags: ['경기도 양주', '도전', '문화예술'],
    location: '경기도 양주',
    price: 24000,
    discountPercentage: 20,
    rating: 4.5,
    reviewCount: 26,
  },
  {
    id: 2,
    title: '온 가족과 함께하는 메타세콰이아 오솔길 체험',
    image: '/images/class2.jpg',
    tags: ['경기도 남양주', '가족', 'STEAM'],
    location: '경기도 남양주',
    price: 30000,
    discountPercentage: 15,
    rating: 4.7,
    reviewCount: 42,
  },
  {
    id: 3,
    title: '오싹오싹 비밀 귀신친구는 어디에 살까?',
    image: '/images/class3.jpg',
    tags: ['경기도 양주', '도전', '용기'],
    location: '경기도 양주',
    price: 22000,
    discountPercentage: 10,
    rating: 4.3,
    reviewCount: 18,
  },
  {
    id: 4,
    title: '창의력 증진! 디자인 씽킹 과학상자 체험 패키지',
    image: '/images/class4.jpg',
    tags: ['경기도 양주', '실험', '체육'],
    location: '경기도 양주',
    price: 35000,
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 53,
  },
  {
    id: 5,
    title: '서울 어린이 독해력 백일장 1박 2일 캠핑',
    image: '/images/class5.jpg',
    tags: ['경기도 양주', '실험', '문화예술'],
    location: '경기도 양주',
    price: 40000,
    discountPercentage: 30,
    rating: 4.6,
    reviewCount: 37,
  },
];

export async function getClasses(): Promise<Class[]> {
  // 실제 API 호출을 시뮬레이션하기 위한 지연
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockClasses;
}
