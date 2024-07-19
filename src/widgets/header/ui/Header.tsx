import { Icon } from '@/shared/ui/Icon';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-24 bg-[#F2F2F2] z-10">
      <div className="pt-11 px-4 flex justify-between items-center">
        <h1 className="font-['Sandoll_Nemony2'] italic font-normal text-xl text-black">세모클래스</h1>
        <Icon
          name="notification"
          className="w-8 h-8"
        />
      </div>
    </header>
  );
}