import React, { useContext, useRef } from 'react'
import Logo from '../assets/images/freshcart-logo.svg' 
import { NavLink, useNavigate } from 'react-router-dom'
import { UserToken } from './Context/UserToken'
import { numItem } from './Context/NumCartItems';

export default function Navbar() {

  let {isLogin,setLogin} = useContext(UserToken);
  let navigate = useNavigate();
  let ref = useRef(null);
  let {cartNum} = useContext(numItem);
  


  function logOut(){
    localStorage.removeItem("token")
    setLogin(null)
    navigate("")
  }

  function changeMode(){
    let body = document.body;
    if(ref.current.checked){
      body.classList.add("dark");
    }else{
      body.classList.remove("dark");

    }
    
  }

  return (
    
<nav className="bg-light-color border-gray-200 dark:bg-gray-900 fixed right-0 left-0 z-50">
  <div className="max-w-screen-xl flex flex-wrap justify-between sm:justify-start lg:justify-start items-center mx-auto p-4">
    <NavLink to="/" className="w-[20%] flex items-center space-x-3 rtl:space-x-reverse active">
      <img src={Logo} className="" alt="Logo" />
    </NavLink >
   <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
  <span className="sr-only">Open main menu</span>
  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
  </svg>
</button>

    <div className="hidden lg:flex lg:justify-between w-[80%]" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0  dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NavLink to="/" className="block py-2 px-3 dark:text-gray-100   rounded lg:bg-transparent  lg:p-0 text-gray-600 " aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Categories</NavLink >
        </li>
        <li>
          <NavLink to="/brands" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Brands</NavLink >
        </li>
        <li>
          <NavLink to="/wishlist" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Wish List</NavLink >
        </li>
        <li>
          <NavLink to="/products" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Products</NavLink >
        </li>
        
        {isLogin &&<li className='flex'>
          <NavLink to="/cart" className="block py-2 px-5 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Cart
          </NavLink >
          <NavLink to="/cart" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">
          <i className='fa-solid fa-shopping-cart pl-2 text-main-color'></i>
          <sup className='font-bold text-main-color pl-1'>{cartNum}</sup>
          </NavLink >
        </li>}
      </ul>

      <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        
        <li>
          <a href="#" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">
         <i className="fa-brands fa-instagram" />
          </a >
        </li>
        <li>
          <a href="#" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">
<i className="fa-brands fa-linkedin" />
          </a >
        </li>
        <li>
          <a href="#" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">
<i className="fa-brands fa-facebook" />
          </a >
        </li>
        
        {isLogin?<li onClick={logOut}>
          <NavLink to="/signout" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Sign Out</NavLink >
        </li>:
        <>
        <li>
          <NavLink to="/login" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Login</NavLink >
        </li>
        <li>
          <NavLink to="/register" className="block py-2 px-3 dark:text-gray-100 rounded lg:bg-transparent  lg:p-0 text-gray-600">Register</NavLink >
        </li>
        <li>
        <div className=" dark:bg-gray-900  justify-center flex flex-row items-center transition-all ease-in-out">
  
</div>

        </li>
        </>
        }
      </ul>
    </div>
  </div>
</nav>


  )
}
