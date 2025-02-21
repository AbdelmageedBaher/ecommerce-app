
import { useQuery } from '@tanstack/react-query';
import  axios  from 'axios';

let token = localStorage.getItem('token')

export function getWislList(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        headers:{token}
    })
}


export default function useQueryWish(fn) {
 
    return useQuery({
        queryKey:['wish'],
        queryFn:fn
    })
  
}
