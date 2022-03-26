import React from "react";
import { Fragment } from "react";
import Button from "@material-ui/core/Button";
import { BulkDeleteButton, TextInput } from "react-admin";
import ResetViewsButton from "../posts/ResetViewsButton";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  useListContext,
  TopToolbar,
  CreateButton,
  ExportButton,
  sanitizeListRestProps,
  EditButton,
  // ShowButton,
} from "react-admin";
import IconEvent from "@material-ui/icons/Event";
import { Pagination } from "react-admin";

// Button edition
const MyEditButton = (props) => {
  return <EditButton {...props} />;
};

// Pagination
const PostPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />
);

// Filtre/Tags
const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

// Button delete
const PostBulkActionButtons = (props) => (
  <Fragment>
    <ResetViewsButton label="Reset Views" {...props} />
    {/* default bulk delete action */}
    <BulkDeleteButton {...props} />
  </Fragment>
);

const ListActions = (props) => {
  const { className, maxResults, ...rest } = props;
  const { total } = useListContext();

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton />
      <ExportButton disabled={total === 0} maxResults={maxResults} />
      {/* Add your custom actions */}
      <Button
        onClick={() => {
          alert("Your custom action");
        }}
        label="Show calendar"
      >
        <IconEvent />
      </Button>
    </TopToolbar>
  );
};

const Characters = ({ record, permissions, ...props }) => {
  return (
    <List
      // component="div"
      {...props}
      actions={<ListActions permissions={permissions} />}
      bulkActionButtons={<PostBulkActionButtons />}
      filters={postFilters}
      filterDefaultValues={{ is_published: true }}
      perPage={25}
      ort={{ field: "published_at", order: "DESC" }}
      pagination={<PostPagination />}
    >
      <Datagrid>
        <TextField source="id" />
        <DateField source="published_at" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="jap_name" />
        <TextField source="alias" />
        <TextField source="other_spellings" />
        {/* <TextField source="body" /> */}
        {/* <TextField source="biologicalInformations" /> */}
        {/* <TextField source="characterType" /> */}
        {/* <TextField source="professionalInformations" /> */}
        {/* <TextField source="otherInformations" />
        
        <TextField source="actingInformations" />   */}
        {/* <BooleanField label="Commentable" source="commentable" /> */}
        <MyEditButton />
        {/* <ShowButton basePath="/comments" label="Show" record={record} /> */}
      </Datagrid>
    </List>
  );
};

export default Characters;
