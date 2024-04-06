import { useState, useEffect } from 'react';

// FR: Définit une interface pour les traductions, où chaque clé est une chaîne de caractères mappée à sa traduction.
// EN: Defines an interface for translations, where each key is a string mapped to its translation.
interface Translation {
    [key: string]: string;
}

// FR: Définit un hook personnalisé pour gérer la traduction dans l'application.
// EN: Defines a custom hook to handle translation in the application.
export const useTranslation = (locale: string) => {
    const [translations, setTranslations] = useState<Translation>({});

    // FR: Utilise useEffect pour charger les traductions lors du changement de locale.
    // EN: Uses useEffect to load translations when the locale changes.
    useEffect(() => {
        // FR: Définit une fonction asynchrone pour charger les fichiers de traduction.
        // EN: Defines an asynchronous function to load translation files.
        async function loadTranslations() {
            try {
                // FR: Tente de charger le fichier de traduction correspondant à la locale.
                // EN: Attempts to load the translation file corresponding to the locale.
                const response = await import(`../locales/${locale}.json`);
                // FR: Met à jour l'état des traductions avec les données chargées.
                // EN: Updates the translations state with the loaded data.
                setTranslations(response.default);
            } catch (error) {
                // FR: Affiche une erreur en cas de problème lors du chargement des traductions.
                // EN: Logs an error if there's an issue loading the translations.
                console.error(`Could not load translations for locale: ${locale}`, error);
            }
        }

        loadTranslations();
    }, [locale]);

    // FR: Retourne une fonction pour obtenir la traduction d'une clé spécifique.
    // EN: Returns a function to get the translation for a specific key.
    return (key: string) => translations[key] || key;
};
