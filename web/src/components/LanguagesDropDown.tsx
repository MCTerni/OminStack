import React, {ChangeEvent, useState} from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguagesDropDown(){

    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    function handleChangeLanguage(event: ChangeEvent<HTMLSelectElement>){
        if(event.target.value){
            i18n.changeLanguage(event.target.value);
            setLanguage(i18n.language);
        }        
    }

    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value = "en"><img src=""/>English</option>
                <option value = "pt"><img src=""/>Português</option>
            </select>
        </div>
    )
}
