import React from 'react';

import { getProducts } from "../../graphql/queries/product";
import { useQuery } from "@apollo/react-hooks";

const Index = () => {
    const { loading, error, data } = useQuery(getProducts);

    console.log(data);
    return (
        <div className='shop__grid'>
            { data.getProducts.map((product) => (
                <div className='product__card' key={product._id}>
                    { product.title }
                </div>
            )) 
            }
        </div>
    );
};

export default Index;