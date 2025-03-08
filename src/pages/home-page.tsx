import { BrowseCategoriesHome } from "@/components/home/browse-categories-home";
import { Hero } from "@/components/home/hero";
import { HomeNewArrivals } from "@/components/home/home-new-arrivals";
import { HomeTopSelling } from "@/components/home/home-new-top-selling";
import { HomeReviews } from "@/components/home/home-reviews";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeNewArrivals />
      <HomeTopSelling />
      <BrowseCategoriesHome />
      <HomeReviews />
    </>
  );
};
