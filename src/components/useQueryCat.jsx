import { useQuery } from '@tanstack/react-query';
import  axios  from 'axios';



let token = localStorage.getItem('token')

export function getCategories(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`,{
        headers:{token}
    })
}


export default function useQueryCat(fn) {
 
    return useQuery({
        queryKey:['categories'],
        queryFn:fn
    })
  
}