import React, {useContext} from "react";
import Link from "next/link";
import CartContext from "../../../context/CartContext";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {

  const { addItem, removeItem } = useContext(CartContext);
  
  return (
    <div className={styles.product__card} key={props.product.id}>
        <Link href={`/product/${props.product.id}`}>
            <a>
                { props.product.img ? <img src={props.product.img} alt={props.product.title} className={styles.product__img} /> : <img src="https://fakeimg.pl/300x400/" alt={props.product.title} className={styles.product__img} /> }
                <h2 className={styles.product__title}>{props.product.title}</h2>
                <p className={styles.product__price}>{props.product.price}€</p>
            </a>
        </Link>
        <button className="btn btn-black" onClick={()=>addItem(props.product)}>Ajouter au panier</button>
        {/* <button className="btn btn-black" onClick={()=>removeItem(props.product)}>Retirer du panier</button> */}
    </div>
  );
};

export default ProductCard;