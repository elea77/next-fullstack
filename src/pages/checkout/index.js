import React, { useContext } from "react";
import TitlePage from "../../components/UI/Title/TitlePage";
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.sevice";
import CartContext from "../../context/CartContext";
import Alert from "../../components/UI/Alert/Alert";
import styles from "./index.module.scss";

const stripePromise = loadStripe("pk_test_51IYAwmJ5UFJGtqNY47wrtVEcNKKVkbiO0TzfR5kQ9Sfle8LjCPvQXzhuWH7PKoRaWQNP3oC2mVBhHPqkUn3n4BId00YcpQNq2k");

const Index = () => {

  const { cart, addItem, removeItem, total, count, deleteLine, deleteCart} = useContext(CartContext);

  const handleConfirmation = async (body) => {
    
    const payload = {
      total: total,
      count: count,
      cart: cart
    }
    try {
      const stripe = await stripePromise;
      const response = await stripeService.createSession(payload);
      await stripe.redirectToCheckout({
        sessionId: response.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <TitlePage title="Panier" />
      <div className={styles.cart__content}>
        {cart ? (
          <table>
            <thead>
              <tr>
                <td>Produit</td>
                <td>Quantités</td>
                <td>Price</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {
              cart.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.qty}</td>
                <td>{product.qty * product.price}</td>
                <td>
                  <button onClick={() => addItem(product)} className="btn">
                    +
                  </button>
                </td>
                <td>
                    <button className="btn" onClick={()=> {removeItem(product)}}>
                      -
                    </button>
                </td>
                <td>
                  <button className="btn btn-white" onClick={()=>{deleteLine(product.id)}}>Supprimer</button>
                </td>
              </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th id="total" colSpan="5">
                  Total :
                </th>
                <td>{total} €</td>
              </tr>
              <tr>
                <button className="btn btn-black" onClick={()=>{deleteCart()}}>Supprimer le panier</button>
              </tr>
            </tfoot>
          </table>
        ) : (
          ""
        )}
        {!cart ? <Alert type="info" message="No item in cart" /> : ""}
        <div className={styles.btn__group}>
          <button className="btn btn-black" onClick={handleConfirmation}>
            Payer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;