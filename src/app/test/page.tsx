import FromClient from '@/widgets/test/FromClient';
import FromServer from '@/widgets/test/FromServer';
import Link from 'next/link';

// /class 페이지랑 현 페이지랑 왔다 갔다하면 Client만 수치가 계속 바뀌고 Server은 캐싱 시간만큼 유지!
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FromClient />
      </div>
      <div>
        <FromServer />
      </div>
      <Link href="/">go to home page</Link>
    </main>
  );
}
