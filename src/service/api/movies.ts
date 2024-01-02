import { MovieData } from "../../types/MovieData";
import { api } from "./api";

export const moviesApi = api.injectEndpoints({
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
      providesTags: () => ["Movie"],
    }),
    getMovie: build.query({
      query: (id: string) => ({
        url: `/movie/${id}`,
        method: "GET",
      }),
      providesTags: ({ id }) => {
        return ["Movie", { type: "Movie", id }];
      },
    }),
    addMovie: build.mutation({
      query: ({ ...data }: MovieData) => {
        return {
          url: "/movie",
          method: "POST",
          data,
        };
      },
      invalidatesTags: ({ id }) => {
        return ["Movie", { type: "Movie", id }];
      },
    }),
    updateMovie: build.mutation({
      query: (movie: MovieData) => ({
        url: `/movie/${movie.id}`,
        method: "patch",
        data: movie,
      }),
      invalidatesTags: ({ id }) => {
        return ["Movie", { type: "Movie", id }];
      },
    }),
    deleteMovie: build.mutation({
      query: (id: string) => ({
        url: `/movie/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ({ id }) => {
        return ["Movie", { type: "Movie", id }];
      },
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
