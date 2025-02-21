
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import Cart from './components/Cart';
import Categories from './components/Categories';
import Brands from './components/Brands';
import Products from './components/Products';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Register from './components/Register';
import SignOut from './components/SignOut';
import ProtectedRoute from './components/ProtectedRoute';
import ProductDetails from './components/ProductDetails';
import Orders from './components/Orders';
import WishList from './components/WishList';

export default function App() {

  const routes = createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'/cart',element:<ProtectedRoute><Cart></Cart></ProtectedRoute>},
      {path:'/categories',element:<Categories></Categories>},
      {path:'/brands',element:<Brands></Brands>},
      {path:'/products',element:<Products></Products>},
      {path:'/productdetails/:id/:catId',element:<ProductDetails></ProductDetails>},
      {path:'/login',element:<Login></Login>},
      {path:'/wishlist',element:<WishList></WishList>},
      {path:'/allorders',element:<Orders></Orders>},
      {path:'/register',element:<Register></Register>},
      {path:'/signout',element:<SignOut></SignOut>},
      {path:'*',element:<Notfound></Notfound>},
    ]
   }
  ])

  return (
    <RouterProvider router={routes}>
      
    </RouterProvider>
  )
}
