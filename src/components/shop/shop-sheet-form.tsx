import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/api/products-api";
import { useNavigate } from "react-router";
import { routes } from "@/config/routes";
import { Button } from "../ui/button";
import { SheetClose } from "../ui/sheet";
import useStore from "@/store/zustand";
import { useMemo } from "react";

const SelectSchema = z.object({
  category: z.string({
    required_error: "Please select an category.",
  }),
  brand: z.string(),
});

export const ShopSheetForm = () => {
  const navigate = useNavigate();

  const { setPagination, setTogglePag} = useStore();

  const { setBrandsZustand } = useStore();

  const form = useForm<z.infer<typeof SelectSchema>>({
    resolver: zodResolver(SelectSchema),
    // defaultValues: {
    //   category: "All Products",
    //   brand: "All Brands"
    // }
  });

  const onSubmit = (data: z.infer<typeof SelectSchema>) => {
    const categoryPath =
      data.category === "All Products" ? "" : `/${data.category}`;
    navigate(`${routes.shop}${categoryPath}`);

    setPagination(0);
    setTogglePag(1);

    document.getElementById("close-form")?.click();
    setBrandsZustand(data.brand);
  };

  const { data: categories } = useGetCategoriesQuery(null);

  const { data } = useGetProductsQuery({
    limit: 0,
    skip: 0,
  });

  const brands = useMemo(() => {
    const uniqueBrands = new Set<string>();
    data?.products.forEach((product) => {
      if (product.brand) uniqueBrands.add(product.brand);
    });
    return Array.from(uniqueBrands);
  }, [data]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={"All Products"} value={"All Products"}>
                    All Products
                  </SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>You can choose category here!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem key={"All Brands"} value={"All Brands"}>
                    All Brands
                  </SelectItem>
                  {brands.map((brand, index) => (
                    <SelectItem key={brand + index} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Choose brand to search!</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
        <SheetClose id="close-form"></SheetClose>
      </form>
    </Form>
  );
};
