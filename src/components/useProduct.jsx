import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useProduct() {
 
    function getDataProducts(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      }

      return useQuery({
        queryKey:['products'],
        queryFn:getDataProducts,
        select:(data)=>data?.data?.data
      })
 
}
