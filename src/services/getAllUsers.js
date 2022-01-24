export const getUsers = async () => {
  return await fetch('http://localhost:3000/api/users/')
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
