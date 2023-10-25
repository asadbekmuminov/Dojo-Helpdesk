import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Ticket from "./pages/Ticket";
import Create from "./pages/Create";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "ticket/:id",
          element: <Ticket />,
        },
        {
          path: "create",
          element: <Create />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
