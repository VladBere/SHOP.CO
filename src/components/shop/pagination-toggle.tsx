import { Button } from "@/components/ui/button";
import { useCallback, useMemo } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductData } from "@/config/types";
import useStore from "@/store/zustand";

interface PaginationToggleProps {
  data: ProductData | undefined;
  productsNum: number | undefined;
}

export const PaginationToggle: React.FC<PaginationToggleProps> = ({
  data,
  productsNum,
}) => {
  const paginationStep = 12;

  const { pagination, setPagination, togglePag, setTogglePag } = useStore();

  const paginationNums = useMemo(() => {
    const totalPages = Math.ceil(
      (productsNum ?? data?.total ?? 0) / paginationStep
    );
    return Array.from({ length: totalPages }, (_, index) => index);
  }, [productsNum, data?.total]);

  const paginationPreviousHandler = useCallback(() => {
    if (pagination > 0) {
      setPagination(pagination - paginationStep);
      setTogglePag(togglePag - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pagination, togglePag, setPagination, setTogglePag]);

  const paginationNextHandler = useCallback(() => {
    if (pagination + paginationStep < (productsNum ?? data?.total ?? 0)) {
      setPagination(pagination + paginationStep);
      setTogglePag(togglePag + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [
    pagination,
    togglePag,
    setPagination,
    setTogglePag,
    productsNum,
    data?.total,
  ]);

  const paginationDirectHandler = useCallback(
    (item: number) => {
      setPagination(item * paginationStep);
      setTogglePag(item + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setPagination, setTogglePag]
  );

  return (
    <div className="flex justify-between w-full">
      <Pagination className="mb-10">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="secondary"
              onClick={paginationPreviousHandler}
              disabled={pagination === 0}
            >
              <ChevronLeft /> Previous
            </Button>
          </PaginationItem>
          <div className="flex">
            <ul className="flex gap-x-1">
              {paginationNums.map((item) => (
                <li key={item}>
                  <Button
                    variant={item + 1 === togglePag ? "secondary" : "ghost"}
                    onClick={() => paginationDirectHandler(item)}
                  >
                    {item + 1}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <PaginationItem>
            <Button
              variant="secondary"
              onClick={paginationNextHandler}
              disabled={
                pagination + paginationStep >= (productsNum ?? data?.total ?? 0)
              }
            >
              Next <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
