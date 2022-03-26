import {
  AutocompleteArrayInput,
  Create,
  SimpleForm,
 
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
// import { Styles } from "@material-ui/styles/withStyles";

//   export const styles = {
//     first_name: { display: "inline-block" },
//     last_name: { display: "inline-block", margin: 10 },
//     jap_name: { display: "inline-block", margin: 10 },
//     alias: { display: "inline-block", margin: 10 },
//     other_spellings: { maxWidth: 544, margin: 10 },
//     published_at: { maxWidth: 544, margin: 10 },
//   };
//   const useStyles = makeStyles(styles);

export const CategoryCreate = (props) => {
  // const classes = useStyles(props);
  // Categories
  const categories = [
    { id: "humain", name: "myroot.specie.human" },
    { id: "animal", name: "myroot.specie.animal" },
    { id: "masculin", name: "myroot.gender.male" },
    { id: "féminin", name: "myroot.gender.female" },
    { id: "indéfini", name: "myroot.gender.undefined" },
  ];

  // // Modulation choices
  const optionRenderer = (categories) => ` ${categories.name} `;

  // Components
  return (
    <Create {...props}>
      <SimpleForm>
        <AutocompleteArrayInput
          source="categories"
          translateChoice={true}
          optionText={optionRenderer}
          choices={categories}
          onCreate={() => {
            const newCategoryName = prompt("Enter a new category info");
            const newCategory = {
              id: newCategoryName,
              name: newCategoryName,
            };
            categories.push(newCategory);
            return newCategoryName;
          }}
        />
      </SimpleForm>
    </Create>
  );
};
