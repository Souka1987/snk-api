import {
  Create,
  DateInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

export const styles = {
  first_name: { display: "inline-block" },
  last_name: { display: "inline-block", margin: 10 },
  jap_name: { display: "inline-block", margin: 10 },
  alias: { display: "inline-block", margin: 10 },
  other_spellings: { maxWidth: 544, margin: 10 },
  published_at: { maxWidth: 544, margin: 10 },
};
const useStyles = makeStyles(styles);

export const PostCreate = (props) => {
  const classes = useStyles(props);

  // Components
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          required
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
        <TextInput formClassName={classes.jap_name} source="jap_name" />
        <TextInput
          formClassName={classes.alias}
          source="alias"
          options={{ multiline: true }}
        />
        <TextInput
          fullWidth
          formClassName={classes.other_spellings}
          source="other_spellings"
        />
        <DateInput
          label="Publication date"
          source="published_at"
          formClassName={classes.published_at}
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};
