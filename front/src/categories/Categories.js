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
import LinkToRelatedCustomers from "./LinkToRelatedCharacters";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
});

const Categories = () => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <Card sx={{ mt: 8 }}>
      <Title
        title={translate("resources.categories.name", { smart_count: 2 })}
      />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              {translate("resources.categories.fields.name")}
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{translate(category.name)}</TableCell>
              <TableCell>
                <LinkToRelatedCustomers category={category.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Categories;
