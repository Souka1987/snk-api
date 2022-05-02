import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
// import { Avatar } from "@material-ui/core";


export const styles = {
  // avatar: { display: "inline-block" },
  first_name: { display: "inline-block" },
  last_name: { display: "inline-block", margin: 10 },
  japanese_name: { display: "inline-block", margin: 10 },
  alias: { display: "inline-block", margin: 10 },
  other_spellings: { maxWidth: 544, margin: 10 },
  published_at: { maxWidth: 544, margin: 10 },
};
const useStyles = makeStyles(styles);

export const CharacterCreate = (props) => {
  const classes = useStyles(props);

  // Components
  return (
    <Create {...props}>
      <SimpleForm>
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
          formClassName={classes.other_spellings}
          source="other_spellings"
          options={{ multiline: true }}
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
