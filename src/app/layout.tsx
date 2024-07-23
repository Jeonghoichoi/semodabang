import { MainLayout } from '@/widgets/layout/';

import './global.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '세모클래스',
  description: '온라인 클래스 플랫폼',
};

export default function ClassRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <MainLayout> {children}</MainLayout>
      </body>
    </html>
  );
}
