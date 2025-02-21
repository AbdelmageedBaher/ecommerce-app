import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

let token = localStorage.getItem('token')

// add cart 
export function addCartWish(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId},{
        headers:{token}
    })
}

// delete cart 
export function deleteItemWish(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
        headers:{token}
    })
}



export default function useMutationWish(fn) {

    const queryClient = useQueryClient()
    return useMutation({mutationFn:fn,onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey: ['wishlist'] })
    }})
 
}
