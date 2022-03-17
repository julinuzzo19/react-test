import {Button, TableCell, TableRow} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/ModeEditOutline';
import styled from 'styled-components';
import {User} from '../../../interfaces/User';

const DeleteIconStyled = styled(DeleteIcon)`
  color: black;
`;
const UpdateIconStyled = styled(UpdateIcon)`
  color: black;
`;

const UserRow = ({users, handleUpdateItem, handleRemoveItem}: any) => {
  return (
    users &&
    users.map((item: User) => (
      <TableRow key={item.id}>
        <TableCell>{item.id}</TableCell>
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
    ))
  );
};

export default UserRow;
