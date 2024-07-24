import { BottomNavigation } from '@/widgets/bottom/navigation';
import { Header } from '@/widgets/Header';

type mainLayoutProps = {
  children: React.ReactNode;
  mainRef?: React.ElementRef<any>;
  isShowGnb?: boolean;
};

export function MainLayout({ children, mainRef, isShowGnb }: mainLayoutProps) {
  return (
    <div className="w-full h-screen flex justify-center max-w-[640px] bg-white my-0 mx-auto">
      <Header />
      <main className="h-screen w-full max-w-[640px] bg-white mt-12">{children}</main>
      {isShowGnb && <BottomNavigation />}
    </div>
  );
}
