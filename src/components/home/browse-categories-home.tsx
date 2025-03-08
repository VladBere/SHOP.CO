import { routes } from "@/config/routes";
import { Link } from "react-router";

export const BrowseCategoriesHome = () => {
  return (
    <div className="flex justify-center mb-[80px]">
      <div className="h-[866px] bg-secondaryBg w-[1240px] rounded-[40px]">
        <h2 className="text-center font-extrabold text-6xl mt-[80px]">
          BROWSE BY CATEGORIES
        </h2>
        <div className="p-[64px]">
          <div className="grid grid-cols-oneTwoGrid gap-5">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to={routes.shop + "/sports-accessories"}
              className="h-[289px] bg-sports rounded-[35px] font-semibold text-4xl pt-[25px] pl-[35px] hover:scale-[0.95] transition-all"
            >
              For Sport
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to={routes.shop + "/kitchen-accessories"}
              className="h-[289px] bg-kitchen rounded-[35px] font-semibold text-4xl pt-[25px] pl-[35px] hover:scale-[0.95] transition-all"
            >
              For Kitchen
            </Link>
          </div>
          <div className="grid grid-cols-twoOneGrid gap-5 mt-5">
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to={routes.shop + "/mobile-accessories"}
              className="h-[289px] bg-mobile rounded-[35px] font-semibold text-4xl pt-[25px] pl-[35px] hover:scale-[0.95] transition-all"
            >
              Mobile Accessories
            </Link>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              to={routes.shop + "/groceries"}
              className="h-[289px] bg-groceries rounded-[35px] font-semibold text-4xl pt-[25px] pl-[35px] hover:scale-[0.95] transition-all"
            >
              Groceries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
