import { FormUser, LoginInterface, User } from "@/config/types";
import { productsApi } from ".";

const userAuthApi = productsApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginInterface, FormUser>({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    getAuthentificatedUser: builder.query<User, string | null>({
      query: (accessToken) => {
        return {
          url: "/user/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useGetAuthentificatedUserQuery } =
  userAuthApi;
