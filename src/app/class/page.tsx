import { Header } from '@/widgets/Header';
import { Banner } from '@/widgets/class/banner';
import { ClassList } from '@/widgets/class/list';
import { BottomNavigation } from '@/widgets/bottom/navigation';

export default function ClassPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#F2F2F2]">
      <Header />
      <Banner />
      <ClassList />
      <BottomNavigation />
    </div>
  );
}
