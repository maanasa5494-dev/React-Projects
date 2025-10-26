
// import {createBrowserRouter, RouterProvider} from "react-router";

import { createBrowserRouter, RouterProvider } from "react-router";
import PostsListing from "./components/PostsListing";
import PostDetails from "./components/PostDetails";

// import ProductListing from "./components/ProducListing";
// import UserListing from "./components/UserListing";
// import ProductDetails from "./components/ProductDetails";
// import UserDetails from "./components/UserDetails";

// function App() {

//   const router = createBrowserRouter([{
//     path: '/products',
//     element: <ProductListing></ProductListing>,
//     children: [
//       {
//         path: 'details',
//         element: <ProductDetails></ProductDetails>
//       },{
//         path: 'user-details',
//         element: <UserDetails></UserDetails>
//       }
//     ]
//   },
//   {
//         path: 'user-details',
//         element: <UserDetails></UserDetails>
//   },
//   {
//     path: '/users',
//     element: <UserListing></UserListing>,
//     children: [
//       {
//         path: 'details',
//         element: <UserDetails></UserDetails>
//       }
//     ]
//   }]);
  
//   return <>
//     <RouterProvider router={router}></RouterProvider>
//   </> 
// }

// export default App


function App() {
  const router = createBrowserRouter([{
    path: 'posts',
    element: <PostsListing></PostsListing>
  }, {
    path: 'post/detail/:postId',
    element: <PostDetails></PostDetails>
  }])
  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}

export default App;
