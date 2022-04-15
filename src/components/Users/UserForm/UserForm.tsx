import React, {ChangeEvent} from 'react';
import Form from '../../common/Form/Form';

interface Props {
  createUser?: any;
}

function UserForm({createUser}: Props) {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [nameElement, emailElement, idElement, imageElement] = e.target.elements;

    let nameArray = (nameElement as HTMLInputElement).value.split(' ');

    let email = (emailElement as HTMLInputElement).value;
    let id = (idElement as HTMLInputElement).value;

    let image: FileList | null = (imageElement as HTMLInputElement).files;
    console.log({image});
    let file: null | File = image![0];

    let first_name = nameArray[0];
    nameArray.shift();
    let last_name = nameArray.join(' ');

    createUser({id, email, first_name, last_name, image: file});
  };

  return <Form handleSubmit={handleSubmit} />;
}

export default UserForm;
