import { useEffect } from 'react';
import { useSnapshot } from 'valtio';

export function resetSate<T extends object>(state: T, initialState: T) {
  const resetState = { ...initialState };
  Object.keys(resetState).forEach((key) => {
    // @ts-ignore
    state[key] = resetState[key];
  });
}

export function useStore<T extends object>(
  state: T,
  initialState: T,
  options?: {
    resetStateWhenUnmount?: boolean;
  },
) {
  useEffect(() => {
    return () => {
      // reset state when unmount
      if (options?.resetStateWhenUnmount !== false) {
        resetSate(state, initialState);
      }
    };
  }, []);

  return useSnapshot(state);
}
