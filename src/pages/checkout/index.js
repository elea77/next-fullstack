import React from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import { loadStripe } from "@stripe/stripe-js";
import stripeService from "../../services/stripe.sevice";

const stripePromise = loadStripe("pk_test_51IYAwmJ5UFJGtqNY47wrtVEcNKKVkbiO0TzfR5kQ9Sfle8LjCPvQXzhuWH7PKoRaWQNP3oC2mVBhHPqkUn3n4BId00YcpQNq2k");

const Index = () => {

    const handleConfirmation = async () => {
        try {
          const stripe = await stripePromise;
          const response = await stripeService.createSession();
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
            <div className="text-center">
                <button className="btn btn-black" onClick={handleConfirmation}>Payer</button>
            </div>
        </div>
    );
}

export default Index;