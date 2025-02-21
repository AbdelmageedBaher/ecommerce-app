
import ProductItem from './ProductItem';
import Loading from './Loading';
import useProduct from './useProduct';
import { Helmet } from 'react-helmet';

export default function Products() {
 
 
 let {data} = useProduct()

  
 
  return (
    <div className='container flex flex-wrap pt-20'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>products</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      {data? data?.map((prod)=> <ProductItem key={prod._id} prod={prod}></ProductItem>):<Loading/>}
    </div>
  )
}
