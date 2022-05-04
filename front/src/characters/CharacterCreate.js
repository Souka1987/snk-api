import {
  Create,
  DateInput,
  // NumberInput,
  required,
  SimpleForm,
  TextInput,
  // minValue,
  // maxValue,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  // ReferenceInput,
  // AutocompleteInput,
  // FormDataConsumer,
  // SelectInput,
  // FileInput,
  // FileField,
  // useNotify,
  // useRedirect,
  // Toolbar,
  // SaveButton,
  // useFormContext,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { useMemo } from "react";
// import { RichTextInput } from "ra-input-rich-text";

export const styles = {
  first_name: { display: "inline-block", margin: 10 },
  last_name: { display: "inline-block", margin: 10 },
  japanese_name: { display: "inline-block", margin: 10 },
  alias: { display: "inline-block", margin: 10 },
  other_spellings: { maxWidth: 544, margin: 10 },
  published_at: { maxWidth: 544, margin: 10 },
};
const useStyles = makeStyles(styles);

// Buttons Group
// const CharacterCreateToolbar = (props) => {
//   const notify = useNotify();
//   const redirect = useRedirect();
//   const { reset } = useFormContext();

    // return (
    //   <Toolbar>
    //     <SaveButton label="post.action.save_and_edit" variant="text" />
    //     <SaveButton
    //       label="post.action.save_and_show"
    //       type="button"
    //       variant="text"
    //       mutationoptions={{
    //         onSuccess: (data) => {
    //           notify("ra.notification.created", {
    //             type: "info",
    //             messageArgs: { smart_count: 1 },
    //           });
    //           redirect("show", "posts", data.id);
    //         },
    //       }}
    //     />
    //     <SaveButton
    //       label="post.action.save_and_add"
    //       type="button"
    //       variant="text"
    //       mutationoptions={{
    //         onSuccess: () => {
    //           reset();
    //           window.scrollTo(0, 0);
    //           notify("ra.notification.created", {
    //             type: "info",
    //             messageArgs: { smart_count: 1 },
    //           });
    //         },
    //       }}
    //     />
    //     <SaveButton
    //       label="post.action.save_with_average_note"
    //       type="button"
    //       variant="text"
    //       mutationoptions={{
    //         onSuccess: (data) => {
    //           notify("ra.notification.created", {
    //             type: "info",
    //             messageArgs: { smart_count: 1 },
    //           });
    //           redirect("show", "posts", data.id);
    //         },
    //       }}
    //       transform={(data) => ({ ...data, average_note: 10 })}
    //     />
    //   </Toolbar>
    // );
  //};

  // const backlinksDefaultValue = [
  //   {
  //     date: new Date(),
  //     url: "https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki",
  //   },
  // ];

  const CharacterCreate = (props) => {
    const defaultvalues = useMemo(
      () => ({
        average_note: 0,
      }),
      []
    );
    const classes = useStyles(props);
    const dateDefaultValue = useMemo(() => new Date(), []);
    // Components
    return (
      <Create {...props} redirect="edit">
        <SimpleForm
          // toolbar={<CharacterCreateToolbar />}
          defaultvalues={defaultvalues}
        >
          {/* <FileInput
            source="pdffile"
            label="PDF-Template"
            accept="application/pdf"
          >
            <FileField source="src" title="title" />
          </FileInput> */}
          <TextInput
            autoFocus
            source="last_name"
            formClassName={classes.last_name}
          />
          <TextInput
            required
            autoFocus
            source="first_name"
            formClassName={classes.first_name}
          />
          <TextInput
            required
            formClassName={classes.japanese_name}
            source="japanese_name"
          />
          <TextInput formClassName={classes.alias} source="alias" />
          <TextInput
            fullWidth
            formClassName="other_spellings"
            source="other_spellings"
            options={{ multiline: true }}
          />
          <TextInput
            source="teaser"
            fullWidth
            multiline
            validate={required("Required field")}
          />
          <TextInput source="body" fullWidth validate={required()} />
          <DateInput source="published_at" defaultValue={dateDefaultValue} />
          <BooleanInput source="commentable" defaultValue />
          <ArrayInput
            source="backlinks"
            // defaultValue={backlinksDefaultValue}
            validate={[required()]}
          >
            <SimpleFormIterator>
              <DateInput source="date" defaultValue="" />
              <TextInput source="url" defaultValue="" />
            </SimpleFormIterator>
          </ArrayInput>
        </SimpleForm>
      </Create>
    );
  };

export default CharacterCreate;
