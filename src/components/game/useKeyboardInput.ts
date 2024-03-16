import { useEffect } from 'react';

function useKeyboardInput(
  enter: () => void,
  returnAll: () => void,
  returnOne: () => void,
  selectLetter: (letter: string) => void,
) {
  useEffect(() => {
    const allowedKeys = new Set([
      'Enter',
      'Escape',
      'Backspace',
      ...'abcdefghijklmnopqrstuvwxyz', // allow any letter a-z
    ]);

    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      if (allowedKeys.has(key)) {
        if (key === 'Enter') {
          enter();
        } else if (key === 'Escape') {
          returnAll();
        } else if (key === 'Backspace') {
          returnOne();
        } else {
          selectLetter(key);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enter, returnAll, returnOne, selectLetter]);

  return null;
}

export default useKeyboardInput;
