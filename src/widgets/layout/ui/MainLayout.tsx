import { ScrollArea } from '@/shared/ui/scroll-area/scroll-area';
import { BottomNavigation } from '@/widgets/bottom/navigation';

export function MainLayout({ children, mainRef, isShowGnb }: any) {
  return (
    <div className="w-full h-screen flex justify-center max-w-[640px] bg-white my-0 mx-auto">
      <main className="h-screen w-full max-w-[640px] bg-white">{children}</main>
      <BottomNavigation />
    </div>
  );
}
