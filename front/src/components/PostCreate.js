import {
  AutocompleteInput,
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
export const PostCreate = (props) => {
  // Categories
  const biologicalInformations = [
    { name: "Humain", id: "humain" },
    { name: "Animal", id: "animal" },
  ];
  const professionalInformations = [
    { name: "Soldat", id: "soldat" },
    { name: "Cuisinier", id: "cuisinier" },
  ];
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
        <AutocompleteInput
          onCreate={() => {
            const newBiologicalInformationsName = prompt(
              "Enter a new biological info"
            );
            const newBiologicalInformations = {
              id: newBiologicalInformationsName.toLowerCase(),
              name: newBiologicalInformationsName,
            };
            biologicalInformations.push(newBiologicalInformations);
            return newBiologicalInformationsName;
          }}
          source="biologicalInformations"
          choices={biologicalInformations}
        />

        <AutocompleteInput
          onCreate={() => {
            const newProfessionalInformationsName = prompt(
              "Enter a new professional info"
            );
            const newProfessionalInformations = {
              id: newProfessionalInformationsName.toLowerCase(),
              name: newProfessionalInformationsName,
            };
            professionalInformations.push(newProfessionalInformations);
            return newProfessionalInformationsName;
          }}
          source="professionalInformations"
          choices={professionalInformations}
        />
      </SimpleForm>
    </Create>
  );
};
