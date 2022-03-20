import {
  AutocompleteArrayInput,
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
export const PostCreate = (props) => {
  // Categories
  const biologicalInformations = [
    { id: "humain", name: "myroot.specie.human" },
    { id: "animal", name: "myroot.specie.animal" },
    { id: "masculin", name: "myroot.gender.male" },
    { id: "féminin", name: "myroot.gender.female" },
    { id: "indéfini", name: "myroot.gender.undefined" },
  ];
  const professionalInformations = [
    { id: "scientifique", name: "myroot.prof.scientist" },
    { id: "soldat", name: "myroot.prof.soldier" },
    { id: "cuisinier", name: "myroot.prof.cook" },
  ];
  const characterType = [
    { id: "protagoniste principal", name: "myroot.type.main_protagonist" },
    { id: "protagonist", name: "myroot.prof.protagonist" },
    { id: "secondaire", name: "myroot.prof.secondary" },
  ];
  // Modulation choices
  const optionRenderer = (biologicalInformations) =>
    ` ${biologicalInformations.name} `;

  // Components
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="noms" />
        <TextInput source="noms japonais" />
        <TextInput source="type" />
        <TextInput source="alias" options={{ multiline: true }} />
        <TextInput source="autres appelations" />
        <RichTextInput source="body" />
        <DateInput
          label="Publication date"
          source="published_at"
          defaultValue={new Date()}
        />

        <AutocompleteArrayInput
          source="biologicalInformations"
          translateChoice={true}
          optionText={optionRenderer}
          choices={biologicalInformations}
          onCreate={() => {
            const newBiologicalInformationsName = prompt(
              "Enter a new biological info"
            );
            const newBiologicalInformations = {
              id: newBiologicalInformationsName,
              name: newBiologicalInformationsName,
            };
            biologicalInformations.push(newBiologicalInformations);
            return newBiologicalInformationsName;
          }}
        />

        <AutocompleteArrayInput
          source="professionalInformations"
          translateChoice={true}
          optionText={optionRenderer}
          choices={professionalInformations}
          onCreate={() => {
            const newProfessionalInformationsName = prompt(
              "Enter a new professional info"
            );
            const newProfessionalInformations = {
              id: newProfessionalInformationsName,
              name: newProfessionalInformationsName,
            };
            professionalInformations.push(newProfessionalInformations);
            return newProfessionalInformationsName;
          }}
        />
        <AutocompleteArrayInput
          source="characterType"
          translateChoice={true}
          optionText={optionRenderer}
          choices={characterType}
          onCreate={() => {
            const newCharacterTypeName = prompt(
              "Enter a new professional info"
            );
            const newCharacterType = {
              id: newCharacterTypeName,
              name: newCharacterTypeName,
            };
            characterType.push(newCharacterType);
            return newCharacterTypeName;
          }}
        />
      </SimpleForm>
    </Create>
  );
};
