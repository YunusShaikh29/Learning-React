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
import ProductsDetail from "./Pages/ProductsDetail";

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
      { index : true, element: <Home /> },  // the replacement for path : '' is index : true 
      { path: "products", element: <ProductsPage /> },
      { path: 'products/:productId', element : <ProductsDetail />}
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
