import './Home.css';
import { useState, useEffect } from 'react'; 
import {useTranslation} from "react-i18next";


const Home = () => {
    const [data, setData] = useState(null); 
    const[t, i18n] = useTranslation("global");

    useEffect(() => {

    }, []);

    const base = () => {
        fetch('http://localhost:3000/ping', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
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

    return (
        <div>
            <div>{t("label.Logged")}</div>
            <button className="custom-button1" onClick={base}>{t("label.Database")}</button>
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
