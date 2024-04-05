import { reactive } from "vue";

export const store = reactive({
  // url
  topRatedTvUrl: `https://api.themoviedb.org/3/tv/top_rated?api_key=3e148cf1ff2157f850e9f747c1563631`,
  topRatedMovieUrl: `https://api.themoviedb.org/3/movie/top_rated?api_key=3e148cf1ff2157f850e9f747c1563631`,

  trendingUrl:
    "https://api.themoviedb.org/3/trending/all/week?api_key=3e148cf1ff2157f850e9f747c1563631",

  movieUrl:
    "https://api.themoviedb.org/3/search/movie?api_key=3e148cf1ff2157f850e9f747c1563631",
  tvUrl:
    " https://api.themoviedb.org/3/search/tv?api_key=3e148cf1ff2157f850e9f747c1563631",

  imgUrl: "https://image.tmdb.org/t/p/w185",

  // data
  trendingList: [],
  movieList: [],
  tvList: [],
  queryInput: "",
});
