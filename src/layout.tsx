import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "./pages/error-page";
import { Outlet } from "react-router";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";

export const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className="">
        <ErrorBoundary fallback={<ErrorPage />}>
          <Outlet />
        </ErrorBoundary>
        <Toaster richColors duration={5000} />
      </main>
      <Footer />
    </div>
  );
};
