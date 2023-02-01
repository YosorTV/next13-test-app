import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { moviesSlice, movieByIdSlice } from './slices';

export const useAppStore = create(
  immer((...tools) => ({
    ...moviesSlice(...tools),
    ...movieByIdSlice(...tools),
  }))
);
