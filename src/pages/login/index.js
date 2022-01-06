import React from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/form/input/Input';
import Button from '../../components/form/Button/Button';

const Index = () => {
    return (
        <div className='container'>
            <TitlePage title="Login"></TitlePage>
            <Input type="email" placeholder="Adresse mail" required="required"></Input>
            <Input type="password" placeholder="Mot de passe"></Input>
            <Button text="CONNEXION"></Button>
        </div>
    );
};

export default Index;
