import { http, HttpResponse, StrictResponse } from 'msw';
import { faker } from '@faker-js/faker';

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

export function formatDate(date: Date) {
  const pad = (num: number) => String(num).padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // getMonth()는 0부터 시작하므로 1을 더합니다.
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}.${month}.${day} ${hours}시 ${minutes}분 ${seconds}초`;
}

const User = [
  { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
  { id: 'zerohch0', nickname: '제로초', image: '/5Udwvqim.jpg' },
  { id: 'leoturtle', nickname: '레오', image: faker.image.avatar() },
];
const Posts = [];

export const handlers = [
  // http.post('/api/login', () => {
  //   console.log('로그인');
  //   return HttpResponse.json(User[1], {
  //     headers: {
  //       'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
  //     }
  //   })
  // }),
  // http.post('/api/logout', () => {
  //   console.log('로그아웃');
  //   return new HttpResponse(null, {
  //     headers: {
  //       'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
  //     }
  //   })
  // }),
  // http.post('/api/users', async ({ request }) => {
  //   console.log('회원가입');
  //   // return HttpResponse.text(JSON.stringify('user_exists'), {
  //   //   status: 403,
  //   // })
  //   return HttpResponse.text(JSON.stringify('ok'), {
  //     headers: {
  //       'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
  //     }
  //   })
  // }),
  http.get('/api/client/getTime', ({ request, params }): StrictResponse<any> => {
    const now = new Date();
    const formattedTime = formatDate(now);

    // console.log('/api/client/getTime:', formattedTime);

    return HttpResponse.json({
      timestamp: formattedTime,
    });
  }),
  http.get('/api/server/getTime/:number', ({ request, params }): StrictResponse<any> => {
    const now = new Date();
    const formattedTime = formatDate(now);
    const { number } = params;

    console.log('/api/server/getTime/' + number, formattedTime);

    return HttpResponse.json({
      timestamp: formattedTime,
    });
  }),
  http.get('/api/server/getTime', ({ request, params }): StrictResponse<any> => {
    const now = new Date();
    const formattedTime = formatDate(now);

    console.log('/api/server/getTime/', formattedTime);

    return HttpResponse.json({
      timestamp: formattedTime,
    });
  }),

  http.get('/api/main', ({ request }): StrictResponse<any> => {
    return HttpResponse.json({
      success: true,
      code: 'SUCCESS',
      message: '정상 처리 되었습니다.',
      aid: 'a1234567890',
      data: [
        {
          contentsId: 0,
          title: '미스터리 뮤지엄',
          description: '박물관으로부터 온 한 통의 편지! 편지의 주인공을 찾아 박물관 곳곳을 누비며 보물들의 이야기를 들어봐요.',
          imageUrl: '/images/class1.jpg',
        },
      ],
    });
  }),
];
