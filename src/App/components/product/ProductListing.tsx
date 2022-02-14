import React, { useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProducts, setProducts } from '../../../features/products/action';
import { actionTypes } from '../../../features/products/action-types';
import { useDispatch } from 'react-redux';

const url = 'https://fakestoreapi.com/products'
function ProductListing() {
  // const dispatch = useAppDispatch();
  const dispatch = useDispatch();
  // const products = useAppSelector((state=>state.allProducs.products))
  
  // const fetchProducts = async ()=> {
  // const response = await axios.get(url);
  //     dispatch(setProducts(response.data))

  // }
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  
  return (
    <div className='ui grid Fluid' style={{display:'flex',justifyContent:'center'}}>
        <ProductComponent />
    </div>
  );
};

export default ProductListing;