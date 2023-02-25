import { useEffect, useRef } from 'react';
import { useHotkey } from '../../hooks/useHotkey';

type Props = {
  labelText: string;
  placeholder?: string;
  onSearchInput: (search: string) => void;
};

export default function SearchBar({
  labelText = 'Search',
  placeholder,
  onSearchInput,
}: Props) {
  const searchInput = useRef(null);

  if (typeof window != 'undefined') {
    useHotkey(
      ['k'],
      () => {
        searchInput.current.focus();
      },
      {
        target: document.body,
        metaKey: true,
      }
    );
  }

  return (
    <div>
      <label htmlFor="search" className="text-xs text-gray-500 h-full">
        {labelText}
      </label>
      <div className="relative mt-1 flex items-center h-10">
        <input
          onChange={e => onSearchInput(e.target.value)}
          ref={searchInput}
          type="text"
          placeholder={placeholder}
          name="search"
          id="search"
          className="h-full block w-full rounded-md border border-gray-200 pr-12 shadow-sm focus:border-brand-accent focus:ring-brand-accent text-gray-800 sm:text-sm px-2"
        />
        <div className="hidden lg:flex absolute inset-y-0 right-0 py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
