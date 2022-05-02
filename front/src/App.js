import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser } from "react-admin";
import { fetchUtils } from "ra-core";
import Dashboard from "./dashboard/Dashboard";
import Characters from "./characters/Characters";
import { CharacterCreate } from "./posts/CharacterCreate";
import { NavigationCreate } from "./posts/NavigationCreate";
import Categories from "./categories/Categories";
import Navigation from "navigation/Navigation";
import authProvider from './authProvider';
import {  PostShow } from './characters/Characters';
import { NavShow } from "navigation/Navigation";
// import i18nProvider from './i18n/i18nProvider';

// Traduction langues
// const i18nProvider = {
//   translate: (key, options) => string,
//   changeLocale: locale => Promise,
//   getLocale: () => string,
// }

// Config CORS
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Custom-Header", "snk-api");
  return fetchUtils.fetchJson(url, options);
};

// Back link
// eslint-disable-next-line no-unused-vars
const dataProvider = jsonServerProvider("http://localhost:1984", httpClient);



function App() {
  return (
    <Admin
      dashboard={Dashboard}
      characters={Characters}
      authProvider={authProvider}
      // i18nProvider={i18nProvider}
      dataProvider={jsonServerProvider(
        "http://localhost:1984",
        fetchUtils.fetchJson,
        "X-Total-Count"
      )}
    >
      <Resource
        name="characters"
        list={Characters}
        edit={EditGuesser}
        create={CharacterCreate}
        show={PostShow}
       
      />
      <Resource
        name="categories"
        list={Categories}
        edit={EditGuesser}
        // create={CategoryCreate}
      />
      <Resource
        name="navigation"
        list={Navigation}
        edit={EditGuesser}
        create={NavigationCreate}
        show={NavShow}
        
      />
    </Admin>
  );
}

export default App;
