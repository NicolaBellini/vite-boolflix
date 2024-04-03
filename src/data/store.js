import { reactive } from "vue";

export const store = reactive({
  // url
  movieUrl:
    "https://api.themoviedb.org/3/search/movie?api_key=3e148cf1ff2157f850e9f747c1563631",
  tvUrl:
    " https://api.themoviedb.org/3/search/tv?api_key=3e148cf1ff2157f850e9f747c1563631",
  imgUrl: "https://image.tmdb.org/t/p/w185",

  // data
  movieList: [],
  tvList: [],
  queryInput: "",
});
