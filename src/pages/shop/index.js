import React from 'react';
import { useRouter } from 'next/router'
import { getProducts } from "../../graphql/queries/product";
import { useQuery } from "@apollo/react-hooks";
import ProductGrid from '../../components/product/ProductGrid/ProductGrid';

const Index = () => {
    const { loading, error, data } = useQuery(getProducts);
    const router = useRouter()
    const { pid } = router.query

    console.log(data);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }


    return (
        <div className='container'>
            <ProductGrid products={data.getProducts}/>
        </div>
    );
};

export default Index;