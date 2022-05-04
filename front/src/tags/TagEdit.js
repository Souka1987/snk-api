import * as React from "react";
import { useParams } from "react-router";
import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  required,
  List,
  Datagrid,
  ResourceContextProvider,
  EditButton,
  TranslatableInputs,
} from "react-admin";

const TagEdit = (props) => {
  const { id } = useParams;
  return (
    <>
      <Edit {...props} redirect="list">
        <SimpleForm warnWhenUnsavedChanges>
          <TextField source="id" />
          <TranslatableInputs locales={["en", "fr"]}>
            <TextInput source="name" validate={[required()]} />
          </TranslatableInputs>
        </SimpleForm>
      </Edit>
      <ResourceContextProvider value="characters">
        <List
          {...props}
          hasCreate={false}
          hasShow
          hasEdit
          hasList
          resource="characters"
          filter={{ tags: [id] }}
          title=" "
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" />
            <EditButton />
          </Datagrid>
        </List>
      </ResourceContextProvider>
    </>
  );
};

export default TagEdit;
