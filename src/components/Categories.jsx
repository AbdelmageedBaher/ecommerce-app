
import { Helmet } from 'react-helmet'
import useQueryCat, { getCategories } from './useQueryCat'
import DataCategory from './DataCategory';
import Loading from './Loading';


export default function Categories() {

 let{data,isLoading} = useQueryCat(getCategories);


if(isLoading)
  return <Loading/>

  
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>categories</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='container flex flex-wrap pt-20'>
              {data?.data?.data.map((category)=> <DataCategory key={category._id} id={category._id} category={category}></DataCategory> )}
            </div>
            
    </div>
  )
}
