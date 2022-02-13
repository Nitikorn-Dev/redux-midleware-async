import React, { useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { removeSelectedProduct, selectedProduct } from '../../../features/products/action';
import { RootState } from '../../store';

const url:string = 'https://fakestoreapi.com/products/';

function ProductDetail() {
  const {productId}= useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state)=>state.selectProduct.product);

  const fetchProduct = async ()=> {
    const response = await axios.get(url+productId);
    dispatch(selectedProduct(response.data));
  }
  
  useEffect(()=>{
    fetchProduct();
    return ()=> {
      dispatch(removeSelectedProduct())
    }
  },[productId])

  console.log(product);
  return (
    <div className="ui grid container">
      {
        Object.keys(product).length === 0 ? (
            <div>...loading</div>
        ):(
          <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product?.image} />
              </div>
              <div className="column rp">
                <h1>{product?.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product?.price}</a>
                </h2>
                <h3 className="ui brown block header">{product?.category}</h3>
                <p>{product?.description}</p>
                <div className="ui vertical animated button" tabIndex={0}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default ProductDetail;