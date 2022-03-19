import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser } from "react-admin";
import { fetchUtils } from "ra-core";
import Dashboard from "./dashboard/Dashboard";
import { PostList } from "./components/PostList";
import { PostCreate } from "./components/PostCreate";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // add your own headers here
  options.headers.set("X-Custom-Header", "foobar");
  return fetchUtils.fetchJson(url, options);
};

// eslint-disable-next-line no-unused-vars
const dataProvider = jsonServerProvider("http://localhost:1984", httpClient);

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={jsonServerProvider(
        "http://localhost:1984",
        fetchUtils.fetchJson,
        "X-Total-Count"
      )}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={EditGuesser}
        create={PostCreate}
      />
    </Admin>
  );
}

export default App;
