import { v4 } from 'uuid';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom: darkPersist } = recoilPersist({
  key: `state${v4()}`,
  storage: localStorage,
});

export const isDarkState = atom<boolean>({
  key: `state${v4()}`,
  default: false,
  effects_UNSTABLE: [darkPersist],
});
