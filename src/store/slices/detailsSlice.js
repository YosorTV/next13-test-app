const initState = {
  detail: {},
};

export const movieByIdSlice = (set, get) => ({
  ...initState,
  getMovieById: async (id) => {},
  resetDetails: () => set({ ...initState }),
});
