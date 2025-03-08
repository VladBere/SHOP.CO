import { useGetAuthentificatedUserQuery } from "@/api/users-auth-api"
import { Link } from "react-router";
import { Button } from "./ui/button";
import { routes } from "@/config/routes";

export const Profile = () => {

  const accessToken = localStorage.getItem("accessToken")

  const {data: user} = useGetAuthentificatedUserQuery(accessToken)  

  console.log(user);
    

  return (
    <div>
      {
        user ? (
          <>
            <h2>{user?.firstName}</h2>
            <img src={user?.image} alt="" />
          </>
        ) : (
          <>
          <p>Unauthorized</p>
          <Link to={routes.login}><Button>Log in</Button></Link>
          </>
        )
      }
    </div>
  )
}