const initState = {
  movies: [],
};

export const moviesSlice = (set, get) => ({
  ...initState,
  getMovies: async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5b2df9a01c179a66af55f96a1e8cb829');
      const response = await data.json();
      set({ movies: [...get().movies, response?.results] });
    } catch (error) {
      throw new Error('Oops something went wrong');
    }
  },
  resetMovies: () => set({ ...initState }),
});
