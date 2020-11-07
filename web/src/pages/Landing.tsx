import React from "react";
import { FiArrowRight} from "react-icons/fi";
import {Link} from "react-router-dom";

import "../styles/pages/landing.css";
import logoImg from "../images/logo.svg";
// the hook for translation
import { useTranslation } from 'react-i18next';

import LanguagesDropDown from '../components/LanguagesDropDown';

function Landing() {
  const {t, i18n} = useTranslation();
 
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>{t('Welcome landing')}</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <LanguagesDropDown />
          <strong>São Paulo</strong>
          São Paulo

        </div>

        <Link to="orphanages" className="enter-app clickable">
              <FiArrowRight size={32} color="rgba(0,0,0, 0.6)" />
            </Link>
      </div>
    </div>
  );
}


export default Landing;
