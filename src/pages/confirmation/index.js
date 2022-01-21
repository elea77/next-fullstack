import React, {useEffect} from 'react';
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        console.log(router.query.amount);
    });
    return (
      
        <div>
            <p>Merci pour votre commande dun montant de {router.query.amount} €</p>
        </div>
    );
}

export default Index;