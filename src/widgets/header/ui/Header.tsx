import { Icon } from '@/shared/ui/button/Icon';

export function Header() {
  return (
    <>
      <header className="fixed top-0 h-12 w-full max-w-[640px] left-1/2 -translate-x-1/2 flex px-3 bg-white z-50 shadow-bottom">
        <div className="flex items-center w-full">
          <h1 className="fixed top-0 left-0 w-full h-12 flex items-center justify-center text-xl font-semibold text-black">세모클래스</h1>
          <div className="ml-auto">
            <Icon
              name="noti"
              className="w-8 h-8 ml-auto"
              width="32"
              height="32"
            />
          </div>
        </div>
      </header>
    </>
  );
}
