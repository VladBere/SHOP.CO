import {
  CategoryData,
  Product,
  ProductData,
  ProductsQueryParams,
} from "@/config/types";
import { productsApi } from ".";
import { getQueryParamString } from "@/utils/get-query-params-string";

const productApi = productsApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductData, Partial<ProductsQueryParams>>({
      query: (queryParams) => {
        if (queryParams.category) {
          return `/products/category/${queryParams.category}?limit=${queryParams.limit}&skip=${queryParams.skip}`;
        } else {
          const queryParamsString = getQueryParamString(queryParams);
          return `/products?${queryParamsString}`;
        }
      },
    }),
    getCategories: builder.query<CategoryData[], null>({
      query: () => {
        return "/products/categories";
      },
    }),
    getSingleProduct: builder.query<Product, string | undefined>({
      query: (id) => {
        return `/products/${id}`;
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetSingleProductQuery,
} = productApi;
