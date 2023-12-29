import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios";
import { MovieData } from "../../types/MovieData";

export const moviesApi = createApi({
  tagTypes: ["Movie"],
  baseQuery: axiosBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    getMovies: build.query({
      query: ({ page }) => ({
        url: "/movies",
        method: "GET",
        params: {
          page: page,
          pageSize: 8,
        },
      }),
      providesTags: ({ movies = [] }) => [
        "Movie",
        ...movies.map((item: MovieData) => {
          return { type: "Movie", id: item.id };
        }),
      ],
    }),
    getMovie: build.query({
      query: (id: string) => ({
        url: `/movie/${id}`,
        method: "GET",
      }),
      providesTags: (res) => ["Movie", { type: "Movie", id: res.id }],
    }),
    addMovie: build.mutation({
      query: ({ ...data }: MovieData) => {
        return {
          url: "/movie",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ["Movie"],
    }),
    updateMovie: build.mutation({
      query: (movie: MovieData) => ({
        url: `/movie/${movie.id}`,
        method: "patch",
        data: movie,
      }),
      invalidatesTags: (r, e, arg) => [{ type: "Movie", id: arg.id }],
    }),
    deleteMovie: build.mutation({
      query: (id: string) => ({
        url: `/movie/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (r, e, id) => [{ type: "Movie", id }],
    }),
  }),
});

export const {
  useAddMovieMutation,
  useGetMoviesQuery,
  useGetMovieQuery,
  useUpdateMovieMutation,
  useDeleteMovieMutation,
} = moviesApi;
