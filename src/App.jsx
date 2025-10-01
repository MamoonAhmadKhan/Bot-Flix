import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import Body from "./components/Body";
import Login from "./pages/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/browse",
          element: <Browse />
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
