import './Home.css';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
    const [data, setData] = useState(null);
    const [t, i18n] = useTranslation("global");
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
    }, []);

    const base = () => {
        fetch('http://localhost:3000/ping', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos de la base de datos');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false); 
        window.location.href = '/login'; 
    }

    return (
        <div>
            <div>{isLoggedIn ? t("label.Logged") : t("label.NotLogged")}</div>
            <button className="custom-button1" onClick={base}>{t("label.Database")}</button>
            <button className="custom-button1" onClick={handleLogout}>{t("label.Logout")}</button>
            <button onClick={(event) => { event.preventDefault(); i18n.changeLanguage("es") }}>ES</button>
            <button onClick={(event) => { event.preventDefault(); i18n.changeLanguage("en") }}>EN</button>
            {data && (
                <div>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default Home;
