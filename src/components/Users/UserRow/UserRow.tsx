import { Button, CardMedia, TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/ModeEditOutline";
import styled from "styled-components";
import { User } from "../../../interfaces/User";
import { useEffect } from "react";

const DeleteIconStyled = styled(DeleteIcon)`
  color: black;
`;
const UpdateIconStyled = styled(UpdateIcon)`
  color: black;
`;

const UserRow = ({ users, handleUpdateItem, handleRemoveItem }: any) => {
  useEffect(() => {}, [users]);
  return (
    users &&
    users.map((item: User) => {
      return (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>
            <CardMedia
              component="img"
              height={60}
              width="100px"
              src={item.image?.url}
            />
          </TableCell>
          <TableCell>{item.first_name}</TableCell>
          <TableCell>{item.last_name}</TableCell>
          <TableCell>{item.email}</TableCell>
          <TableCell>
            <Button
              onClick={() => {
                handleRemoveItem(item.id);
              }}
            >
              <DeleteIconStyled />
            </Button>
          </TableCell>
          <TableCell>
            <Button
              onClick={() => {
                handleUpdateItem(item);
              }}
            >
              <UpdateIconStyled />
            </Button>
          </TableCell>
        </TableRow>
      );
    })
  );
};

export default UserRow;
