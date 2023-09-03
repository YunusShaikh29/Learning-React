import {
  RouterProvider,
  createBrowserRouter,
  /* createRoutesFromElements,
  Route, */
} from "react-router-dom";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";

/* 
~~~~~~~~~~~~~~~~~ OLD METHOD ~~~~~~~~~~~~~~~~~~~
const routerDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
)

const router = createBrowserRouter(routerDefinition) */

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement : <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
