const initState = {
  movies: [],
};

export const moviesSlice = (set, get) => ({
  ...initState,
  getMovies: async () => {},
  resetMovies: () => set({ ...initState }),
});
