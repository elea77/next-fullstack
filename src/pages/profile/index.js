import React, { useEffect, useState } from 'react';
import TitlePage from '../../components/UI/Title/TitlePage';
import authService from "../../services/auth.service";

const Index = () => {

    const [user, setUser] = useState();

    useEffect(() => {
        console.log(localStorage.getItem('token'));
        const token = localStorage.getItem('token');
        authService.getUser(token)
            .then(data => {
                console.log(data);
                setUser(data.user);
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className='container'>
            <TitlePage title="Profil" className='text-center'></TitlePage>
            FirstName: {user && user.firstName}
            LastName: {user && user.lastName}
            Email: {user && user.email}
        </div>
    );
};

export default Index;