import React, {useState} from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import Label from '../../components/UI/Label/Label';
import Button from '../../components/UI/Button/Button';
import Link from 'next/link';
import styles from "./index.module.scss";


const Index = () => {

    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        fetch("http://localhost:3131/api/v1/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <TitlePage title="Inscription" className='text-center'></TitlePage>
            <form className={styles.register__form} onSubmit={(e) => handleSubmit(e)}>

                <Label text="Prénom"></Label>
                <Input type="text" name="firstName" required="required" onChange={(e) => { setUser({ ...user, firstName: e.target.value }) }}></Input>
                
                <Label text="Nom"></Label>
                <Input type="text" name="lastName" required="required" onChange={(e) => { setUser({ ...user, lastName: e.target.value }) }}></Input>
                
                <Label text="Téléphone"></Label>
                <Input type="number" name="phone" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></Input>
                
                <Label text="Adresse mail"></Label>
                <Input type="email" name="email" required="required" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></Input>
                
                <Label text="Mot de passe"></Label>
                <Input type="password" name="password" required="required" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></Input>

                <Input type="submit" value="S'INSCRIRE" className="btn btn-black"></Input>
            </form>
        </div>
    );
};

export default Index;
