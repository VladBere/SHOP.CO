import { Layout } from "./layout"
import { ErrorPage } from "./pages/error-page"
import { routes } from './config/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NewArrivals } from "./pages/new-arrivals-page"
import { LoginPage } from "./pages/login-page"
import { UserProfilePage } from "./pages/user-profile-page"
import { CartPage } from "./pages/cart-page"
import { OnSalePage } from "./pages/on-sale-page"
import { BrandsPage } from "./pages/brands-page"
import { HomePage } from "./pages/home-page"
import { TopSellingPage } from "./pages/top-selling-page"
import { ShopPage } from "./pages/shop-page"
import { ProductPage } from "./pages/product-page"

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
          {
              index: true,
              element: <HomePage />
          },
          {
            path: routes.newArrivals,
            element: <NewArrivals />
          },
          {
            path: routes.topSelling,
            element: <TopSellingPage />
          },
          {
            path: routes.onSale,
            element: <OnSalePage />
          },
          {
            path: routes.userProfile,
            element: <UserProfilePage />
          },
          {
            path: routes.cart,
            element: <CartPage />
          },
          {
            path: routes.brands,
            element: <BrandsPage />
          },
          {
            path: routes.shop,
            element: <ShopPage />
          },
          {
            path: routes.shopCategory,
            element: <ShopPage />
          },
          {
            path: routes.product,
            element: <ProductPage />
          },
      ]
  },
  {
    path: routes.login,
    element: <LoginPage />
  },
  {
      path: '*',
      element: <ErrorPage />
  }
])

export const App = () => <RouterProvider router={router} />