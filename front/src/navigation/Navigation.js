import React from "react";
import {
  List,
  //   TextInput,
  Datagrid,
  TextField,
  DateField,
  TopToolbar,
  SimpleShowLayout,
  Show,
  SimpleForm,
  Create,
  // Edit,
  sanitizeListRestProps,
  EditButton,
  ShowButton,
  DeleteButton,
//   RichTextField,
} from "react-admin";
import { CreateButton, ExportButton } from "ra-ui-materialui";
// import { Avatar } from "@material-ui/core";

// Liste des actions
const ListActions = (props) => {
  const {
    className,
    maxResults,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
    ...rest
  } = props;

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filter={filterValues}
        exporter={exporter}
      />
    </TopToolbar>
  );
};

const Navigation = ({ record, permissions, ...props }) => {
  return (
    <List
      // component="div"
      {...props}
      actions={<ListActions />}
      filterDefaultValues={{ is_published: true }}
      perPage={25}
      ort={{ field: "published_at", order: "DESC" }}
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="BiologicalInformations" />
        {/* <TextField source="professionalInformations" />
        <TextField source="otherInformations" />
        <TextField source="actingInformations" />   */}
        {/* <BooleanField label="Commentable" source="commentable" /> */}
        {/* <ShowButton basePath="/comments" label="Show" record={record} /> */}
        <DateField source="published_at" />
        <ShowButton label="" />
        <EditButton label="" />
        <DeleteButton label="" redirect={true} />
      </Datagrid>
    </List>
  );
};

export const NavShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="BiologicalInformations" />
      <DateField source="published_at" />
      <DateField label="Publication date" source="created_at" />
    </SimpleShowLayout>
  </Show>
);

export const NavCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="id" />
      <DateField source="published_at" />
      <TextField source="BiologicalInformations" />
      <DateField label="Publication date" source="created_at" />
    </SimpleForm>
  </Create>
);

// export const PostEdit = (props) => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextField source="id" />
//       <DateField source="published_at" />
//       <TextField source="first_name" />
//       <TextField source="last_name" />
//       <TextField source="jap_name" />
//       <TextField source="alias" />
//       <TextField source="other_spellings" />
//       {/* <TextInput multiline source="body" /> */}
//     </SimpleForm>
//   </Edit>
// );

export default Navigation;
