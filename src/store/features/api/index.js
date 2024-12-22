import { API_ROUTE } from "@/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_ROUTE }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (restaurantId) => `/restaurant/${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (restaurantId) => [{ type: "Reviews", restaurantId }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: ({ restaurantId }) => [
        { type: "Reviews", restaurantId },
      ],
    }),
    getDishById: builder.query({
      query: (dishId) => `/dish/${dishId}`,
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishesByRestaurantIdQuery,
  useAddReviewMutation,
  useGetDishByIdQuery,
} = apiSlice;
