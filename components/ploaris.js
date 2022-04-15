import React from 'react'
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';

const Provider = ({ children }) => {
    return (
        <AppProvider i18n={enTranslations}>
            {children}
        </AppProvider>
    )

}


export default Provider