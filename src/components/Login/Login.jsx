import './Login.css';
import Home from "../Home/Home.jsx";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const[t, i18n] = useTranslation("global");


    const handdleLogin = (e) =>{
        e.preventDefault();
        const data = {
            username: username,
            password: password
        };
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response=> response.json())
            .then(result => {
                console.log(result.token)
                if(result.token){
                    localStorage.setItem('token', result.token)
                    setLoginSuccessful(true);
                } else {
                    setLoginSuccessful(false);
                }
            })
            .catch(error =>{
                console.log(error)
            })
    }

    return (
        <>
          {loginSuccessful ? (
            <Home />
          ) : (
            <div className="custom-form">
              <form>
                <label className="custom-label">{t("label.Username")}</label>
                <input
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="username"
                  className="custom-input"
                  type="text"
                />
                <label className="custom-label">{t("label.Password")}</label>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="password"
                  className="custom-input"
                  type="password"
                />
                <div className="login-button">
                    <button className="custom-button" onClick={handdleLogin}>{t("label.Login")}</button>
                </div>
                <div className="buttons-container">
                    <button onClick={(event) => { event.preventDefault(); i18n.changeLanguage("es") }}>ES</button>
                    <button onClick={(event) => { event.preventDefault(); i18n.changeLanguage("en") }}>EN</button>
                </div>
              </form>
            </div>
          )}
        </>
      );
}

export default Login;


