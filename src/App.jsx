import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Browse from "./pages/Browse";
import Body from "./components/Body";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
