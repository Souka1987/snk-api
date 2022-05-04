import { Admin, Resource } from "react-admin";
import { fetchUtils } from "ra-core";
import Dashboard from "dashboard/Dashboard";
import characters from "./characters";
import authProvider from "authProvider";
import i18nProvider from "./i18nProvider";
import jsonServerProvider from "ra-data-json-server";
import tags from "tags";
import NotFound from "./NotFound";

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
      catchAll={NotFound}
      dashboard={Dashboard}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      theme={{
        palette: {
          background: {
            default: "#fafafb",
          },
        },
      }}
      dataProvider={jsonServerProvider(
        "http://localhost:1984",
        fetchUtils.fetchJson,
        "X-Total-Count"
      )}
    >
      <Resource name="characters" {...characters} />
      <Resource name="tags" {...tags} />
    </Admin>
  );
}

export default App;
