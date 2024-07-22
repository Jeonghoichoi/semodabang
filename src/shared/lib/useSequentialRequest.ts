import { useCallback, useRef } from 'react';

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export function useSequentialRequest<Args extends unknown[], Data>(requestFn: (signal: AbortSignal, ...args: Args) => Promise<Data>) {
  const requestFnRef = useLatest(requestFn);

  const running = useRef(false);
  const abortController = useRef<AbortController | null>(null);

  return useCallback(
    async (...args: Args) => {
      if (running.current) {
        abortController.current?.abort();
        abortController.current = null;
      }

      running.current = true;

      const controller = new AbortController();
      abortController.current = controller;

      try {
        const result = await requestFnRef.current(controller.signal, ...args);
        return result;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          // 요청이 중단되었을 때 조용히 처리
          console.log('Request was aborted');
        } else {
          // 다른 종류의 오류는 다시 던집니다
          throw error;
        }
      } finally {
        if (controller === abortController.current) {
          running.current = false;
          abortController.current = null;
        }
      }
    },
    [requestFnRef]
  );
}
