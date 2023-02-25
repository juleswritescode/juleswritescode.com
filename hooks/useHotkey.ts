import { useEventListener } from './useEventListener';

type Options = {
  target?: HTMLElement;
  shiftKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
};

export function useHotkey(
  keys: string[],
  cb: (e: KeyboardEvent) => void,
  options: Options = {}
) {
  const {
    target = document.body,
    shiftKey = false,
    ctrlKey = false,
    metaKey = false,
  } = options;

  useEventListener(target, 'keydown', (e: KeyboardEvent) => {
    if (!keys.includes(e.key)) return;
    if (shiftKey && !e.shiftKey) return;
    if (ctrlKey && !e.ctrlKey) return;
    if (metaKey && !e.metaKey) return;

    cb(e);
  });
}
