import { BottomNavigation } from '@/widgets/bottom/navigation';
import { FlexBox } from '@/shared/ui/flexbox/flexBox';

import { Header } from '@/widgets/Header';

type mainLayoutProps = {
  children: React.ReactNode;
  mainRef?: React.ElementRef<any>;
  isShowGnb?: boolean;
};

export function MainLayout({ children, mainRef, isShowGnb }: mainLayoutProps) {
  return (
    <FlexBox
      className="w-full h-screen max-w-[640px] bg-white my-0 mx-auto"
      justify="center"
      margin="my-0 mx-auto"
    >
      <Header />
      <main className="h-screen w-full max-w-[640px] bg-white mt-12">{children}</main>
      {isShowGnb && <BottomNavigation />}
    </FlexBox>
  );
}
