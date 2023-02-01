export const getMovies = async () => {
  try {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5b2df9a01c179a66af55f96a1e8cb829');
    const response = await data.json();
    return response.results;
  } catch (error) {
    throw new Error('Oops something went wrong');
  }
};
