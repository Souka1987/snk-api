import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser } from "react-admin";
import { fetchUtils } from "ra-core";
import Dashboard from "./dashboard/Dashboard";
import Characters from "./characters/Characters";
import { PostCreate } from "./posts/PostCreate";
import { CategoryCreate } from "./posts/CategoryCreate";
import Categories from "./characters/Categories";

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
        create={PostCreate}
      />
      <Resource
        name="categories"
        list={Categories}
        edit={EditGuesser}
        create={CategoryCreate}
      />
    </Admin>
  );
}

export default App;
