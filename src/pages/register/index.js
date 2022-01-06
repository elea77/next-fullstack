import React, {useState} from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import Label from '../../components/UI/Label/Label';
import Button from '../../components/UI/Button/Button';
import Link from 'next/link';

const Index = () => {

    const [user, setUser] = useState({});

    const handleSubmit = () => {
        e.preventDefault();
        console.log(user);
        fetch("http://localhost:3131/api/v1/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <TitlePage title="Inscription" className='text-center'></TitlePage>
            <div className='register__form text-center'>
            <form className={StyleSheet.form__register} onSubmit={(e) => handleSubmit(e)}>

                <Label text="Prénom"></Label>
                <Input type="text" name="firstName" required="required"></Input>
                
                <Label text="Nom"></Label>
                <Input type="text" name="lastName" required="required"></Input>
                
                <Label text="Téléphone"></Label>
                <Input type="number" name="phone"></Input>
                
                <Label text="Adresse mail"></Label>
                <Input type="email" name="email" required="required"></Input>
                
                <Label text="Mot de passe"></Label>
                <Input type="password" name="password" required="required"></Input>

                <Input type="submit" value="S'INSCRIRE" className="btn btn-black" onChange=""></Input>
            </form>
            </div>
        </div>
    );
};

export default Index;
