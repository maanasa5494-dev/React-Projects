import { createBrowserRouter, RouterProvider } from "react-router";

import Login from './components/Login';
import AutoSuggest from './components/AutoSuggest';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const router = createBrowserRouter([{
    path: 'details',
    element: <ProtectedRoute><AutoSuggest></AutoSuggest></ProtectedRoute>
  }, {
    path: '*',
    element: <Login></Login>
  }]);
  
  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}

export default App;
