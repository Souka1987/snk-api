import * as React from "react";
import { SelectInput } from "react-admin";

import categories from "../categories/data";

const CategoryInput = (props) => (
  <SelectInput
    {...props}
    source="groups"
    translateChoice
    choices={categories}
  />
);

export default CategoryInput;
