import React, {useState} from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import Input from '../../components/UI/Input/Input';
import Alert from '../../components/UI/Alert/Alert';
import Link from 'next/link';
import { useRouter } from "next/router";
import authService from "../../services/auth.service";

const Index = () => {

    const [user, setUser] = useState({});
    const router = useRouter();
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            if (data.message) {
                setError(true);
                setErrorMessage(data.message);
                return false;
            }
            localStorage.setItem("token", data.token);
            router.push("/profile");
        })
        .catch((err) => {
            setError(true);
            setErrorMessage(err.message)
        });
    };
    
    return (
        <div className='container'>
            <TitlePage title="Login" className='text-center'></TitlePage>
            
            {error ? <Alert text={errorMessage} className='alert alert-danger'></Alert> : ""}

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
