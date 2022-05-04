import * as React from "react";
import {
  DateField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
  useShowController,
  RichTextField,
  CloneButton,
  ShowContextProvider,
  ArrayField,
  Datagrid,
  // ReferenceArrayField,
  // SingleFieldList,
  // ChipField,
  SelectField,
  NumberField,
  BooleanField,
} from "react-admin";
// import CharacterTitle from "./CharacterTitle";

// import { useLocaleState } from 'react-admin';

const CharacterShow = (props) => {
  const controllerProps = useShowController();
  // const [locale] = useLocaleState();
  // Components
  return (
    <ShowContextProvider>
      <Show {...props}>
        <TabbedShowLayout>
          <Tab label="post.form.summary">
            <TextField source="id" />
            <DateField source="published_at" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="jap_name" />
            <TextField source="alias" />
            <TextField source="other_spellings" />
            {controllerProps.record &&
              controllerProps.record.first_name ===
                "Fusce massa lorem, pulvinar a posuere ut, accumsan ac nisi" && (
                <TextField source="teaser" />
              )}
            <ArrayField source="backlinks">
              <Datagrid bulkactionbuttons={false}>
                <DateField source="date" />
              </Datagrid>
            </ArrayField>
          </Tab>
          <Tab label="">
            <RichTextField source="body" stripTags={false} label={false} />
          </Tab>
          <Tab label="post.form.miscellaneous">
            {/* <ReferenceArrayField
              reference="tags"
              source="tags"
              sort={{ field: `name.${locale}`, order: "ASC" }}
            >
              <SingleFieldList>
                <ChipField source={`name.${locale}`} />
              </SingleFieldList>
            </ReferenceArrayField> */}
            <DateField source="published_at" />
            <SelectField
              source="category"
              choices={[
                { name: "Human", id: "human" },
                { name: "Animal", id: "animal" },
              ]}
            />
            <NumberField source="average_note" />
            <BooleanField source="commentable" />
            <TextField source="views" />
            <CloneButton />
          </Tab>
          {/* <Tab label="character.form.comments">
          <ReferenceManyField
            reference="comments"
            target="character_id"
            sort={{ field: "created_at", order: "DESC" }}
          >
            <Datagrid>
              <DateField source="created_at" />
              <TextField source="author.name" />
              <TextField source="body" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <CreateRelatedComment />
        </Tab> */}
        </TabbedShowLayout>
        {/* <SimpleShowLayout>
        <TextField source="id" />
        <DateField source="published_at" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="jap_name" />
        <TextField source="alias" />
        <TextField source="other_spellings" />
        <DateField label="Publication date" source="created_at" />
      </SimpleShowLayout> */}
      </Show>
    </ShowContextProvider>
  );
};

export default CharacterShow;
