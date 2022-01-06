import React, {useState} from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Link from 'next/link';

const Index = () => {
    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        fetch("http://localhost:3131/api/v1/login", {
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
            <TitlePage title="Login" className='text-center'></TitlePage>
            <form className='text-center' onSubmit={(e) => handleSubmit(e)}>
                <Input type="email" placeholder="Adresse mail" required="required" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></Input>
                <Input type="password" placeholder="Mot de passe" onChange={(e) => { setUser({ ...user, password: e.target.value }) }}></Input>

                <Input type="submit" value="CONNEXION" className="btn btn-black"></Input>

            </form>

            <div className='text-center'>
                <Link href="/register"><a>Pas de compte ? Créer un compte</a></Link>
            </div>
        </div>
    );
};

export default Index;
