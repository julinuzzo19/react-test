import { useLocation, useParams } from "react-router-dom";
import Form from "../../common/Form/Form";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState } from "../../../reducers";
import { updateUser } from "../../../actions/userActions";
import { ChangeEvent, useEffect, useState } from "react";

const UserEdit = () => {
  let { id } = useParams();
  let { user }: any = useLocation().state;

  const dispatch = useDispatch();
  const { message, error } = useSelector((state: RootState) => state.user);

  const [data, setData] = useState({
    full_name: `${user.first_name} ${user.last_name}`,
    email: user.email,
    id: user.id,
    image: user.image,
  });

  useEffect(() => {}, []);

  const handleChange = (e: any) => {
    setData({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [nameElement, emailElement, idElement, imageElement] =
      e.target.elements;
    console.log(nameElement, emailElement, idElement, imageElement);
    let nameArray = (nameElement as HTMLInputElement).value.split(" ");
    let email = (emailElement as HTMLInputElement).value;

    let image: FileList | null = (imageElement as HTMLInputElement).files;
    let file: null | File = image![0];

    dispatch(
      updateUser({
        id: user.id,
        email,
        first_name: nameArray[0],
        last_name: nameArray[1],
        image: file,
      })
    );
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        user={data}
        handleChange={handleChange}
      />
      {message && <p>{message}</p>}
    </>
  );
};

export default UserEdit;
