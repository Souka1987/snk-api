import { AutocompleteArrayInput, Create, SimpleForm } from "react-admin";
// import { makeStyles } from "@material-ui/core/styles";
// import { Styles } from "@material-ui/styles/withStyles";

//   export const styles = {
//     first_name: { display: "inline-block" },
//     last_name: { display: "inline-block", margin: 10 },
//     jap_name: { display: "inline-block", margin: 10 },
//     alias: { display: "inline-block", margin: 10 },
//     other_spellings: { maxWidth: 544, margin: 10 },
//     published_at: { maxWidth: 544, margin: 10 },
//   };
// const useStyles = makeStyles(styles);

export const NavigationCreate = (props) => {
  // const classes = useStyles(props);
  // Categories
  const BiologicalInformations = [
    { id: "humain", name: "myroot.specie.human" },
    { id: "animal", name: "myroot.specie.animal" },
    { id: "masculin", name: "myroot.gender.male" },
    { id: "féminin", name: "myroot.gender.female" },
    { id: "indéfini", name: "myroot.gender.undefined" },
    { id: "age", name: "myroot.age.age" },
    { id: "Height", name: "myroot.height.height" },
    { id: "Weight", name: "myroot.weight.weight" },
    { id: "Birthday", name: "myroot.birthday.birthday" },
    { id: "Birthplace", name: "myroot.birthplace.birthplace" },
    { id: "Residence", name: "myroot.residence.residence" },
    { id: "Status", name: "myroot.status.status" },
  ];

  // // Modulation choices
  const optionRenderer = (BiologicalInformations) =>
    ` ${BiologicalInformations.name} `;

  // Components
  return (
    <Create {...props}>
      <SimpleForm>
        <AutocompleteArrayInput
          source="BiologicalInformations"
          formClassName={BiologicalInformations}
          translateChoice={true}
          optionText={optionRenderer}
          choices={BiologicalInformations}
          onCreate={() => {
            const newBiologicalInformations = prompt(
              "Enter a new category info"
            );
            const newBio = {
              id: newBiologicalInformations,
              name: newBiologicalInformations,
            };
            BiologicalInformations.push(newBiologicalInformations);
            return newBiologicalInformations;
          }}
        />
      </SimpleForm>
    </Create>
  );
};
