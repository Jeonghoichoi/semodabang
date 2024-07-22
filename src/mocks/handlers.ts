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

function formatDate(date: Date) {
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
  http.get('/api/getTime', ({ request, params }): StrictResponse<any> => {
    const now = new Date();
    const formattedTime = formatDate(now);

    console.log('/api/getTime:', formattedTime);

    return HttpResponse.json({
      timestamp: formattedTime,
    });
  }),
];
