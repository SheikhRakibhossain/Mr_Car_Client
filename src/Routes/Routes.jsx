import { createBrowserRouter} from "react-router-dom";
import User from "../Pages/User/User";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/user",
          element:<User/>,
          loader: () => fetch('http://localhost:5000/users')
        }


      ]
    }
    
  ]);
  export default router;