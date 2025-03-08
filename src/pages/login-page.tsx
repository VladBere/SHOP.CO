import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";

import { Link } from "react-router";

import { Toaster } from "sonner";

import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/login-form";


export const LoginPage = () => {
  

  return (
    <div>
      <div>
        <Button className="mt-5 ml-5">
          <Link to={routes.home}>Go Home</Link>
        </Button>
      </div>
       <div className="h-[800px] flex w-screen justify-center items-center"> 
        <Card className="min-w-[220px] h-[320px] min-[600px]:w-[500px] py-4 px-5 col-start-1 ">
          <h2 className="font-extrabold text-3xl text-center mb-3">LOGIN</h2>
          <LoginForm />
        </Card>
      </div>
      <Toaster richColors duration={5000} />
    </div>
  );
};
