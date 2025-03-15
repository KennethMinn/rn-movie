import { getQuery } from "@/utils";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
});

export const getMovies = async (query?: any) => {
  try {
    const queries = getQuery(query);
    const endPoint = !queries ? "/discover/movie" : `/search/movie?${queries}`;
    const res = await axiosInstance.get(endPoint);

    return res.data.results;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
