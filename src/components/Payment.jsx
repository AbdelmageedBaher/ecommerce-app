import React from 'react'
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { onlinePayment } from './Apis/payOnline';
import * as motion from "motion/react-client"

export default function Payment({cartId}) {
     
    let {data,mutate} = useMutation({mutationFn:onlinePayment})
    
    function handlePayment(shippingAddress){
        mutate({cartId,shippingAddress})
    }
    if(data?.data?.status=='success'){
        window.location.href=data?.data?.session?.url;
    }
    
    let formik = useFormik({
        initialValues:{
            details: '',
            phone: '',
            city: ''
        },
        onSubmit:handlePayment
    })
    
return (

<motion.div initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
            }}>
    <div>
    <form className="container mx-auto py-20" onSubmit={formik.handleSubmit}>
  <div className="mb-10" >
    <input type="text" id="details" value={formik.values.details} onChange={formik.handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>
  <div className="mb-10">
    <input type="text" id="phone" value={formik.values.phone} onChange={formik.handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>
  <div className="mb-10">
    <input type="text" id="city" value={formik.values.city} onChange={formik.handleChange} className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
  </div>
  <button type='submit' className="mb-10 text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
    </div>
</motion.div>


  )
}
