import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Products } from "./pages/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Login } from "./components/Authentication/Login";
import { Signup } from "./components/Authentication/Signup";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,

        children: [
          { index: true, element: <Home /> },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "signin",
            element: <Login />,
          },
          {
            path: "register",
            element: <Signup />,
          },
      {
        path: "/productDetails",
        element: <ProductDetails/>,
      },
        ],
      }
    ],
    { basename: "/round-3-salla-ecommerce-front" }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
