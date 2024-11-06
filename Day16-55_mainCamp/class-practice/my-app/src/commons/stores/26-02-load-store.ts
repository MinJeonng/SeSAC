//로딩이 완료 되었는지 안되었는지 확인하는 store

import { create } from 'zustand';
export const useLoadStore = create((set) => ({
  isLoaded: false, //처음엔 당연히 load 안되어있을테니까 초기값 false

  setIsLoaded: () =>
    set(() => ({
      isLoaded: true,
    })),
}));
