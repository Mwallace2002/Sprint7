import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import spanishFlagUrl from "./icons/spain.svg";
import englishFlagUrl from "./icons/uk.svg";

const Navbar = () => {
  const [t, i18n] = useTranslation('global');
  const [collapse, setCollapse] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div className={collapse ? 'sidebar sidebar-collapse' : 'sidebar'}>
      <ul className="sidebar-menu">
        <li className="sidebar-item"><Link to="/">{t('navbar.home')}</Link></li>
        <li className="sidebar-item"><Link to="/delivery">{t('navbar.delivery')}</Link></li>
        <li className="sidebar-item"><Link to="/visitas">{t('navbar.visits')}</Link></li>
        <li className="sidebar-item"><Link to="/vehiculos">{t('navbar.vehicles')}</Link></li>
        <li className="sidebar-item">
          <div className="language-icons-container">
            <button 
              className={`language-button ${selectedLanguage === 'es' ? 'selected' : ''}`} 
              onClick={() => changeLanguage('es')}
            >
              <img src={spanishFlagUrl} alt="Spanish Flag" className="language-icon" />
            </button>
            <button 
              className={`language-button ${selectedLanguage === 'en' ? 'selected' : ''}`} 
              onClick={() => changeLanguage('en')}
            >
              <img src={englishFlagUrl} alt="English Flag" className="language-icon" />
            </button>
          </div>
        </li>
      </ul>
      <button className="collapse-button" onClick={toggleCollapse}>
        {collapse ? '»' : '«'}
      </button>
    </div>
  );
}

export default Navbar;

