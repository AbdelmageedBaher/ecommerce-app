import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserToken } from './Context/UserToken';

export default function Login() {

  let {setLogin} = useContext(UserToken);


  let navigate = useNavigate()
  
  async function handleLogin(values)
  {

    try {
      let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values);
      
      if(data.message === "success"){
        setLogin(data.token)
        localStorage.setItem("token",data.token);
        navigate("/cart")
      }
      
    } catch (error) {
      console.log(error.message);
      
      
    }
  }

  let validationSchema = Yup.object().shape({
    email:Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().required('Required').matches(/^[A-Z][a-z0-9]{5,10}$/,'not correct password'),
   
  });

  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    }, 
    validationSchema,
    onSubmit: handleLogin
  });

  return (
    <div className='pt-20 container'>

<form className="md:w-[60%] mx-auto pt-10" onSubmit={formik.handleSubmit}>
      <h2 className='text-[1.5rem]  py-4'>login Now:</h2>
      
      <div className="relative z-0 w-full mb-5 group">
    <input type="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    {formik.errors.email && formik.touched.email ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.email}</span>
      </div>:''}
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
    <input type="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-main-color-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    {formik.errors.password && formik.touched.password ?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
      <span className="font-medium">{formik.errors.password}</span>
      </div>:''}
    <label htmlFor="passowrd" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
      
  
      <button type="submit" className="text-white bg-main-color hover:bg-main-color focus:ring-4 focus:outline-none focus:bg-main-color font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">login</button>
</form>



    </div>
  )
}

