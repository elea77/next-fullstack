import React from 'react';
import styles from "./index.module.scss";
import { getProduct } from "../../../graphql/queries/product";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";

const Index = () => {

    const router = useRouter();

    const { loading, error, data } = useQuery(getProduct, {
        variables: {
            id: router.query.id
        }
    });


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
            <div className={styles.product}>
                <div className={styles.product__img}>
                    { data.getProduct.img ? <img src={data.getProduct.img} alt={data.getProduct.title} /> : <img src="https://sheinsz.ltwebstatic.com/she_dist/images/bg-grey-ba96515e9b.png" alt={data.getProduct.title} /> }
                </div>
                <div className={styles.product__info}>
                    <h2>{data.getProduct.title}</h2>
                    <p>{data.getProduct.price}€</p>
                </div>
            </div>
        </div>
    );
};

export default Index;