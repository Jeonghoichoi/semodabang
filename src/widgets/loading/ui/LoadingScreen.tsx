export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="flex items-center justify-center h-full">
        <span className="animate-bounce bg-white h-2 w-2 rounded-full" />
        <span
          className="animate-bounce bg-white h-2 w-2 rounded-full ml-2"
          style={{ animationDelay: '0.2s' }}
        />
        <span
          className="animate-bounce bg-white h-2 w-2 rounded-full ml-2"
          style={{ animationDelay: '0.4s' }}
        />
      </div>
    </div>
  );
}
