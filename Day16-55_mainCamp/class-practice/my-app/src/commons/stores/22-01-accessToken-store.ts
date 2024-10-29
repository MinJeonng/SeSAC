// 글로벌 state

import { create } from 'zustand';

export const useAccessTokenStore = create((set) => {
  return {
    accessToken: '',
    setAccessToken: (newAccessToken) =>
      set(() => ({ accessToken: newAccessToken })),
  };
});