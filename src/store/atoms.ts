import { v4 } from 'uuid';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom: darkPersist } = recoilPersist({
  key: `state${v4()}`,
  storage: localStorage,
});

export const isDarkAtom = atom<boolean>({
  key: `darkMode`,
  default: localStorage.getItem(`darkMode`) === 'true' ? true : false,
  effects_UNSTABLE: [darkPersist],
});

export const isShowTopBtniAtom = atom<boolean>({
  key: `state${v4()}`,
  default: false,
});

export const isShowSidebariAtom = atom<boolean>({
  key: `state${v4()}`,
  default: false,
});
