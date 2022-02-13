import {useRoutes,Navigate} from 'react-router-dom';

import ProductListing from './App/components/product/ProductListing';
import ProductDetail from './App/components/product/ProductDetail';

const Router = () => {
    return useRoutes([
        {
            path:'products',element:<ProductListing />
        },
        {
            path:'/products/:productId',element:<ProductDetail />
        },
        {
            path:'/',element:<Navigate to="/products" replace/>
        },
        {
            path:'*',element:<Navigate to="" replace/>
        }
    ])
}

export default Router;