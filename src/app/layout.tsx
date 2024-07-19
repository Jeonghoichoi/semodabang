import type { Metadata } from 'next';
import '@/app/global.css';

export const metadata: Metadata = {
  title: 'Next.js',
  description: '해보자 한번',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
