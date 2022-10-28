const API_KEY = "19ecff424940ecdb7478d8acf7bfe795";

const requests = {
  fetchTrending: `/movie/popular?api_key=${API_KEY}`,
  randomMovie: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchMovies: `/genre/movie/list?api_key=${API_KEY}`,
  trendingWeek: `/trending/all/week?api_key=${API_KEY}`,
  upcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
  popularForKid: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  fetchComedies: `discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=revenue.desc`,
};

export default requests;
