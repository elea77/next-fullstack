import React from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/form/Input/Input';
import Label from '../../components/form/Label/Label';
import Button from '../../components/form/Button/Button';

const Index = () => {
    return (
        <div className='container'>
            <TitlePage title="Inscription"></TitlePage>
            <div className='register__form'>

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

                <Button text="S'inscrire"></Button>
            </div>
        </div>
    );
};

export default Index;
