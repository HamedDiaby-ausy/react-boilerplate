import React, { useState } from "react";
import './styles.css';
import { IHome } from "./interfaces";
import { useTranslation } from "@utilities/hooks";

export const HomeComponent:React.FC<IHome> = ({

})=> {

    const [locale, setLocale] = useState('en');
    const translate = useTranslation(locale);

    return (
        <div>
            <h1>
                {translate('welcome')}
            </h1>

            <button onClick={() => setLocale(locale === 'en' ? 'fr' : 'en')}>
                {translate('changeLanguage')}
            </button>
        </div>
    )
}
