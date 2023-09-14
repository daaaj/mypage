import { v4 } from 'uuid';
import { atom } from 'recoil';

export const isState = atom({
  key: `state${v4()}`,
  default: false,
});
