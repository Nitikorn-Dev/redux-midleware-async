import React from 'react';
import {useParams} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { 
  removeSelectedProduct,
  fetchProduct } from '../../../features/products/action';
import { useDispatch } from 'react-redux';
// import axios from 'axios';



// const useProduct = (productId:{id:any})=> {
//   const [product,setProduct] = React.useState();
//   React.useEffect(()=>{
//     async function fetch() {
//       try {
//         const response = await axios.get(`https://fakestoreapi.com/products/${productId.id}`)
//         setProduct(response.data)
//       } catch (error) {
        
//       }

//     }
//     fetch();
//   },[productId])
//   return  product;
// }

function ProductDetail() {
  const {productId}= useParams();
  const dispatch = useDispatch();
  const product = useAppSelector((state)=>state.selectProduct.product);

  const fetchSelector = React.useCallback(()=>{
    if(productId && productId !== "") dispatch(fetchProduct(productId))
  },[productId,dispatch]);

  const removeSelector = React.useCallback(()=>{
    console.log('Remove ')
    dispatch(removeSelectedProduct())
  },[dispatch])
  
  // const productObject = React.useMemo(()=>{
  //   return {id:productId}
  // },[productId]);

  // const remove = React.useCallback(()=>{
  //   dispatch(removeSelectedProduct())
  // },[productId]); 
  
  // const fetch = ()=>{
  //   if(productId && productId !== "") dispatch(fetchProduct(productId));
  // }

  // const initFetch = React.useCallback(() => {
  //   dispatch(fetchProduct(productObject));
  // }, [productObject]);
 
  React.useEffect(()=>{
    fetchSelector();
      
    // function fetch(){
    //   if(productObject && productObject.id !== "") dispatch(fetchProduct(productObject));
    // }
    // fetch();

// function removeSelector (){
//   dispatch(removeSelectedProduct())
// }
    return ()=> removeSelector();
     
  },[fetchSelector,removeSelector]);


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
                <img className="ui fluid image" src={product.image} alt={product.title} />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <p className="ui teal tag label">${product.price}</p>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
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