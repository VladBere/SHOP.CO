import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Eye, EyeClosed } from "lucide-react";
import { useLoginUserMutation } from "@/api/users-auth-api";

import { toast } from "sonner";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginSchema } from "@/config/schemas";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router";
import { routes } from "@/config/routes";
import { Button } from "./ui/button";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const HandlePasswordVisible = () => {
    setIsVisible(!isVisible);
  };

  const [authUser] = useLoginUserMutation();

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const result = {
      ...values,
      expiresInMins: 30,
    };
    authUser(result).then((response) => {
      if (response.error) {
        toast.error("Authorization error");
      } else {
        toast.success("Authorization complete!");
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setIsLoading(true);
        setTimeout(() => {
            navigate(routes.home);
          }, 2000);
      }
      
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type={isVisible ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onClick={() => HandlePasswordVisible()}
            type="button"
            className="mt-8"
          >
            {isVisible ? <Eye /> : <EyeClosed className="mt-1" />}
          </Button>
        </div>
        <Button disabled={isLoading} className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};
