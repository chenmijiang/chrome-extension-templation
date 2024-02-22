import { proxy } from 'valtio';

export const initialState = {
  count: 0,
};

export let state = proxy<{
  count: number;
}>({ ...initialState });

export const changeCount = (value: number) => {
  state.count = value;
};
