import React, { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setProducts } from '../../../features/products/action';

const url = 'https://fakestoreapi.com/products'
function ProductListing() {
  const dispatch = useAppDispatch();
  // const products = useAppSelector((state=>state.allProducs.products))
  
  const fetchProducts = async ()=> {
  const response = await axios.get(url);
  // console.log("Fetch",response.data)
      dispatch(setProducts(response.data))

  }
  useEffect(()=>{
    fetchProducts();
  },[])
  // console.log("List",products)
  return (
    <div className='ui grid Fluid' style={{display:'flex',justifyContent:'center'}}>
        <ProductComponent />
    </div>
  );
};

export default ProductListing;