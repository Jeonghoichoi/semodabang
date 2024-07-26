import { Banner, ClassList } from '@/app/class/_ui';
import { FlexBox } from '@/shared/ui/flexbox/flexBox';

export default function ClassPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#F2F2F2]">
      <Banner />
      <ClassList />
    </div>
  );
}
