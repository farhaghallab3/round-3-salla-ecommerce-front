import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout";
//import { Home } from "./pages/Home";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Products } from "./pages/Products";

import ProductDetails from "./components/ProductDetails/upper";
import { Login } from "./components/Authentication/Login";
import { Signup } from "./components/Authentication/Signup";

import { Home } from "./pages/Home";
import ProductDetailsUpper from "./components/ProductDetails/upper";



import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { setToken, setUser } from "./redux/slices/userSlice";
import PrivateRoute from "./components/Authentication/PrivateRoute";


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      dispatch(setUser(JSON.parse(savedUser)));
    }

    if (savedToken) {
      dispatch(setToken(JSON.parse(savedToken)));
    }
  }, [dispatch]);

  const router = createBrowserRouter(
    [
      {
        path: "",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "signin",
            element: <Login />,
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "register",
            element: <Signup />,
          },

          {
            path: "/upper",
            element: <ProductDetailsUpper/>,
          },
        ],
      },
     
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
     


          // protected route example
          {
            path: "/productDetails",
            element: (
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            ),
          },
        ],
      },

    ],
    { basename: "/round-3-salla-ecommerce-front" }
  );
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
