import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
      },
    ]
    // { basename: "/round-3-travel-front" }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
export default App;
