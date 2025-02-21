import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

let token = localStorage.getItem('token')

// add cart 
export function addCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{
        headers:{token}
    })
}

// delete cart 
export function deleteItem(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers:{token}
    })
}

// clear cart 
export function clearItem(){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers:{token}
    })
}

// update cart 
export function updateItem({productId,count}){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{
        headers:{token}
    })
}

export default function useMutationCart(fn) {

    const queryClient = useQueryClient()
    return useMutation({mutationFn:fn,onSuccess:()=>{
        queryClient.invalidateQueries({ queryKey: ['cart'] })
    }})
 
}
