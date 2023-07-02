import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path:'profile/:login', element: <ProfilePage /> }
    ]
  }]);
  return <RouterProvider router={ router } />
}
export default App;
