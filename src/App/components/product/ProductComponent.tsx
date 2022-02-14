import React from 'react'
import { Link } from 'react-router-dom';
import { Product } from '../../../features/products/type';
import { useAppSelector } from '../../hooks';

function ProductComponent() {
  const producs = useAppSelector(state => state.allProducs.products);
  const loading = useAppSelector(state=>state.fetchState.loading)

  const renderList = producs.map(({ id, title, image, price, category}: Product) => {
    return (
      <div className="four wide" key={title}>
        <Link to={`/products/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
                </div>
              <div className="content">
                <div className={`${loading?'ui placeholder':''}`}>
                <div className='header'>{title}</div>
                <div className='meta price'>${price}</div>
                <div className='meta'>{category}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  );
};

export default ProductComponent;