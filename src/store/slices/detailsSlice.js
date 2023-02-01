/* use in component with 'use client' */

const initState = {
  movieDetails: {},
};

export const movieByIdSlice = (set) => ({
  ...initState,
  getMovieById: async (id) => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5b2df9a01c179a66af55f96a1e8cb829`);
      const response = await data.json();
      set({ movieDetails: response });
    } catch (error) {
      throw new Error('Oops something went wrong');
    }
  },
  resetDetails: () => set({ ...initState }),
});
