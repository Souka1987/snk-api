import { useCreate, useCreateSuggestionContext } from "react-admin";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import React from "react";

export const CreateTag = () => {
  const { filter, onCancel, onCreate } = useCreateSuggestionContext();
  const [value, setValue] = React.useState(filter || "");
  const [create] = useCreate("tags");

  const handleSubmit = (event) => {
    event.preventDefault();
    create(
      {
        payload: {
          data: {
            title: value,
          },
        },
      },
      {
        onSuccess: ({ data }) => {
          setValue("");
          onCreate(data);
        },
      }
    );
  };

  return (
    <Dialog open onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="New tag"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            autoFocus
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit">Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
