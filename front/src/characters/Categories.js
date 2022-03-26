import React from "react";
import { Title } from "react-admin";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-admin";
import categories from "./data";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
});

const Categories = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <Card className={classes.root}>
      <Title title="Categories" />

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{translate(category.name)}</TableCell>
              <TableCell>
            
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Categories;
