import { MainLayout } from '@/widgets/layout/';
import './global.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { GlobalErrorBoundary } from '@/widgets/error/GlobalErrorBoundary';

const NOTOSANSKR = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '세모클래스',
  description: '온라인 클래스 플랫폼',
};

export default function ClassRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NOTOSANSKR.className}>
        <GlobalErrorBoundary>
          <MainLayout isShowGnb>{children}</MainLayout>
        </GlobalErrorBoundary>
      </body>
    </html>
  );
}
