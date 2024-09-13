import Movie from "./pages/Movie"
import Directors from "./pages/Directors"
import Home from "./pages/Home"
import Actors from "./pages/Actors"
import ErrorPage from "./pages/Error";


const routes = [
  {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />
},
{
  path: "/directors",
  element: <Directors />
},
{
  path: "/movie/:id",
  element: <Movie />
}
   
  ];

export default routes;