import PeopleIcon from "@mui/icons-material/People";
import CharacterCreate from "./CharacterCreate";
import CharacterEdit from "./CharacterEdit";
import CharacterList from "./CharacterList";
import CharacterShow from "./CharacterShow";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: CharacterList,
  create: CharacterCreate,
  edit: CharacterEdit,
  show: CharacterShow,
  icon: PeopleIcon,
};
