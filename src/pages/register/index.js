import React, {useState} from 'react';
import { useRouter } from "next/router";
import authService from "../../services/auth.service";
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import Label from '../../components/UI/Label/Label';
import Button from '../../components/UI/Button/Button';
import Link from 'next/link';
import styles from "./index.module.scss";
import Alert from '../../components/UI/Alert/Alert';


const Index = () => {

    const [user, setUser] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(user)
        .then((data) => {
            // console.log(data);
            if (data.message) {
            setError(true);
            setErrorMessage(data.message);
            return false;
            }
            localStorage.setItem("token", data.token);
            router.push("/profile");
        })
        .catch((err) => {
            // console.log(err);
            setError(true);
            setErrorMessage(err.message)
        });
    };

    return (
        <div className='container'>
            <TitlePage title="Inscription" className='text-center'></TitlePage>
            <form className={styles.register__form} onSubmit={(e) => handleSubmit(e)}>

                {error ? <Alert text={errorMessage} className='alert alert-danger'></Alert> : ""}

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

            <div className='text-center'>
                <Link href="/login"><a>Déjà un compte ? Se connecter</a></Link>
            </div>
        </div>
    );
};

export default Index;
