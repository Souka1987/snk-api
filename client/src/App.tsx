import * as React from 'react';
import { Admin, CustomRoutes, EditGuesser, ListGuesser, Resource } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { Route } from 'react-router';

import authProvider from './authProvider';
import { Login, Layout } from './layout';
// import { Dashboard } from './dashboard';
import englishMessages from './i18n/en';
import { lightTheme } from './layout/themes';
import jsonServerProvider from "ra-data-json-server";
import countries from './countries';
import planets from './planets';
import categories from './categories';
import reviews from './reviews';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments'

const dataProvider = jsonServerProvider("http://localhost:1984");

// Config CORS
const httpClient = (url: any, options = {}) => {
    if (!options) {
        options = new Headers({ Accept: "application/json" });
    }
};

const i18nProvider = polyglotI18nProvider(locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
}, 'en');

const App = () => {
    return (
        <Admin
            title=""
            dataProvider={jsonServerProvider(
                "http://localhost:1984"
            )}
            authProvider={authProvider}
            // dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
            disableTelemetry
            theme={lightTheme}
        >
            <CustomRoutes>
                <Route path="/configuration" element={<Configuration />} />
                <Route path="/segments" element={<Segments />} />
            </CustomRoutes>
            <Resource name="countries" {...countries} />
            <Resource name="planets" {...planets} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews"  {...EditGuesser} />
        </Admin>
    );
};

export default App;
