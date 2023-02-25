import { useEffect } from 'react';

export function useEventListener(
  target: HTMLElement,
  event: string,
  cb: (e: Event) => void
) {
  useEffect(() => {
    target.addEventListener(event, cb);
    return () => target.removeEventListener('mousemove', cb);
  }, []);
}
