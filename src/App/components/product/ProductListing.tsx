import React, {useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { fetchProducts} from '../../../features/products/action';
import { useDispatch } from 'react-redux';
function ProductListing() {
  const dispatch = useDispatch();

  
  useEffect(()=>{
    const fetch = ()=>{
      dispatch(fetchProducts())
    }
    fetch();
  },[dispatch]);
  
  return (
    <div className='ui grid Fluid' style={{display:'flex',justifyContent:'center'}}>
        <ProductComponent />
    </div>
  );
};

export default ProductListing;