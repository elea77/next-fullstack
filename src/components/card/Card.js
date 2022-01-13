import React from 'react';
import styles from "./Card.module.scss";
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { getProducts } from "../../graphql/queries/product";
// import { useQuery } from "@apollo/react-hooks";


const Card = () => {

    // const { loading, error, data } = useQuery(getProducts);
    // const router = useRouter()
    // const { pid } = router.query

    // console.log(data);

    // if (loading) {
    //     return "loading...";
    // }

    // if (error) {
    //     console.log(error);
    //     return null;
    // }

    return (
        <div>
            {/* {
                data.getProducts.map((product) => (
                    <div className={styles.product__card} key={product.id}>
                        <Link href={{pathname: '/product', query: {id: product.id} }}>
                            <a>
                                { product.img ? <img src={product.img} alt={product.title} className={styles.product__img} /> : <img src="https://fakeimg.pl/300x400/" alt={product.title} className={styles.product__img} /> }
                                <h2 className={styles.product__title}>{product.title}</h2>
                                <p className={styles.product__price}>{product.price}€</p>
                            </a>
                        </Link>
                    </div>
                ) )
            } */}
        </div>
    );
};

export default Card;