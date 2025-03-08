import { Button } from "@/components/ui/button"
import { routes } from "@/config/routes"
import { Link } from "react-router"

export const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="font-bold text-8xl">Something went wrong...</h1>
      <Button className="w-60 h-24 rounded-3xl mt-10 text-4xl"><Link to={routes.home}>Go Home</Link></Button>
    </div>
  )
}