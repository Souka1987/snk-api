import * as React from "react";
import { Fragment, useState } from "react";
import {
  ListBase,
  ListActions,
  useListContext,
  EditButton,
  Title,
} from "react-admin";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
  Card,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const TagList = (props) => (
  <ListBase perPage={1000} {...props}>
    <ListActions />
    <Box maxWidth="20em" marginTop="1em">
      <Card>
        <Tree />
      </Card>
    </Box>
  </ListBase>
);

const Tree = (props) => {
  const { data, defaultTitle } = useListContext();
  const [openChildren, setOpenChildren] = useState([]);

  const toggleNode = (node) =>
    setOpenChildren((state) => {
      if (state.includes(node.id)) {
        return [
          ...state.splice(0, state.indexOf(node.id)),
          ...state.splice(state.indexOf(node.id) + 1, state.length),
        ];
      } else {
        return [...state, node.id];
      }
    });
  const roots = data;
  const getChildNodes = (root) => data((node) => node.parent_id === root.id);
  console.log("roots", data);
  return (
    <List {...props}>
      <Title defaultTitle={defaultTitle} />
      {/* <SubTree
        key={data.id}
        root={data}
        getChildNodes={getChildNodes}
        openChildren={openChildren}
        toggleNode={toggleNode}
        level={1}
      /> */}
    </List>
  );
};

// const SubTree = ({
//   level,
//   root,
//   getChildNodes,
//   openChildren,
//   toggleNode,
//   props,
// }) => {
//   const childNodes = getChildNodes(root);
//   const hasChildren = childNodes.length > 0;
//   const open = openChildren.includes(root.id);
//   return (
//     <Fragment>
//       <ListItem
//         onClick={() => hasChildren && toggleNode(root)}
//         style={{ paddingLeft: level * 16 }}
//       >
//         {hasChildren && open && <ExpandLess />}
//         {hasChildren && !open && <ExpandMore />}
//         {!hasChildren && <div style={{ width: 24 }}>&nbsp;</div>}
//         <ListItemText primary={root.name.en} />

//         <ListItemSecondaryAction>
//           <EditButton record={root} />
//         </ListItemSecondaryAction>
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding {...props}>
//           <SubTree
//             //   key={node.id}
//             //   root={node}
//             getChildNodes={getChildNodes}
//             openChildren={openChildren}
//             toggleNode={toggleNode}
//             level={level + 1}
//           />
//         </List>
//       </Collapse>
//     </Fragment>
//   );
// };

export default TagList;
