import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


let token = localStorage.getItem("token")

    export function getBrands(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`,{
            headers:{
                token
            }
        })
    }

export default function useQueryBrends(fn) {
 
    return useQuery({
        queryKey:['brands'],
        queryFn:fn
    })
  
}