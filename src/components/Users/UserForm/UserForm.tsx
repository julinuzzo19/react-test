import React, {ChangeEvent} from 'react';
import Form from '../../common/Form/Form';

interface Props {
  createUser?: any;
}

function UserForm({createUser}: Props) {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [nameElement, emailElement, idElement] = e.target.elements;

    let nameArray = (nameElement as HTMLInputElement).value.split(' ');

    let email = (emailElement as HTMLInputElement).value;
    let id = (idElement as HTMLInputElement).value;

    let first_name = nameArray[0];

    nameArray.shift();
    let last_name = nameArray.join(' ');

    createUser({id, email, first_name, last_name});
  };

  return <Form handleSubmit={handleSubmit} />;
}

export default UserForm;
