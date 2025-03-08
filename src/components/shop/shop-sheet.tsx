import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { ShopSheetForm } from "./shop-sheet-form";
import { SlidersHorizontal } from "lucide-react";

export const ShopSheet = () => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="w-[120px] h-[45px]">
          Filters <SlidersHorizontal />
               </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex gap-3">
            Filters <SlidersHorizontal />
          </SheetTitle>
          <SheetDescription>
            Choose settings you need and click submit button!
          </SheetDescription>
        </SheetHeader>
        <ShopSheetForm />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
