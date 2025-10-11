import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import Body from "./components/Body";
import Login from "./pages/Login";
import GPTSearch from "./pages/GPTSearch";
import BrowseMain from "./components/BrowseMain";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
          children: [
            {
              path: "/browse",
              element: <BrowseMain />
            },
            {
              path: "/browse/gpt-search",
              element: <GPTSearch />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
