import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from "./components/Main/Main.jsx";
import {useTranslation} from "react-i18next";
import {I18nextProvider} from "react-i18next"
import i18next from "i18next";
import { Routes, Route } from 'react-router-dom';
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});


root.render(
  
    
      <I18nextProvider i18n={i18next}>
        <Main />
      </I18nextProvider>
    
  
);
