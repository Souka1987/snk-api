import React, { Fragment, memo } from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  TopToolbar,
  ReferenceArrayField,
  sanitizeListRestProps,
  EditButton,
  ShowButton,
  BooleanField,
  SingleFieldList,
  ChipField,
  SearchInput,
  TextInput,
  useTranslate,
  NumberField,
  SimpleList,
  downloadCSV,
  BulkDeleteButton,
  BulkExportButton,
} from "react-admin";
import ResetViewsButton from "./ResetViewsButton";
import { CreateButton, ExportButton } from "ra-ui-materialui";
import { Box, Chip, useMediaQuery } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import jsonExport from "jsonexport/dist";
import lodashGet from "lodash/get";

const QuickFilter = ({ label, source, defaultValue }) => {
  const translate = useTranslate();
  return <Chip sx={{ marginBottom: 1 }} label={translate(label)} />;
};

const postFilter = [
  <SearchInput source="q" alwaysOn />,
  <TextInput source="title" defaultValue="Qui tempore rerum et voluptates" />,
  <QuickFilter
    label="resources.posts.fields.commentable"
    source="commentable"
    defaultValue
  />,
];

const PostListBulkActions = memo(({ children, ...props }) => (
  <Fragment>
    <ResetViewsButton {...props} />
    <BulkDeleteButton {...props} />
    <BulkExportButton {...props} />
  </Fragment>
));
const PostListActionToolbar = ({ children, ...props }) => (
  <Box sx={{ alignItems: "center", display: "flex" }}>{children}</Box>
);

const exporter = (posts) => {
  const data = posts.map((post) => ({
    ...post,
    backlinks: lodashGet(post, "backlinks", []).map((backlink) => backlink.url),
  }));
  return jsonExport(data, (err, csv) => downloadCSV(csv, "posts"));
};

const StyledDatagrid = styled(Datagrid)(({ theme }) => ({
  "& .title": {
    maxWidth: "20em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  "& .hiddenOnSmallScreens": {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  "& .column-tags": {
    minWidth: "9em",
  },
  "& .publishedAt": { fontStyle: "italic" },
}));
const rowClick = (id, resource, record) => {
  if (record.commentable) {
    return "edit";
  }

  return "show";
};
const PostPanel = ({ id, record, resource }) => (
  <div dangerouslySetInnerHTML={{ __html: record.body }} />
);

// Liste des actions
const ListActions = (props) => {
  const {
    className,
    maxResults,
    // basepath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
    ...rest
  } = props;

  return (
    <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
      <CreateButton />
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

const CharacterList = ({ record, permissions, ...props }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    // Composant parent List
    <List
      // component="div"
      {...props}
      filters={postFilter}
      sort={{ field: "published_at", order: "DESC" }}
      exporter={exporter}
      actions={<ListActions />}
      filterdefaultvalues={{ is_published: true }}
      perPage={25}
      ort={{ field: "published_at", order: "DESC" }}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <StyledDatagrid
          bulkactionbuttons={<PostListBulkActions />}
          rowClick={rowClick}
          expand={PostPanel}
          optimized
        >
          <TextField source="id" />
          <TextField source="first_name" cellClassName="first_name" />
          <TextField source="last_name" cellClassName="last_name" />
          <TextField source="japanese_name" cellClassName="japanese_name" />
          <TextField source="alias" cellClassName="alias" />
          <TextField source="other_spellings" cellClassName="other_spellings" />
          {/* Date de publication */}
          <DateField
            source="published_at"
            sortByOrder="DESC"
            cellClassName="publishedAt"
          />
          <BooleanField
            source="commentable"
            label="resources.posts.fields.commentable_short"
            sortable={false}
          />
          {/* Nombre de vues */}
          <NumberField source="views" sortByOrder="DESC" />
          {/* TAGS */}
          <ReferenceArrayField
            label="Tags"
            reference="tags"
            source="tags"
            sortBy="tags.name"
            sort={tagSort}
            cellClassName="hiddenOnSmallScreens"
            headerClassName="hiddenOnSmallScreens"
          >
            <SingleFieldList>
              <ChipField source="name.en" size="small" />
            </SingleFieldList>
          </ReferenceArrayField>
          {/* Boutons actions C.R.U.D */}
          {/* <ShowButton label="" />
          <EditButton label="" /> */}
          <PostListActionToolbar>
            <EditButton />
            <ShowButton />
          </PostListActionToolbar>
          {/* <DeleteButton redirect={true} label="" /> */}
        </StyledDatagrid>
      )}
    </List>
  );
};

const tagSort = { field: "name.en", order: "ASC" };

export default CharacterList;
