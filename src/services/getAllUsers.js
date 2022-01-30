const fromApiResponse = apiResponse => {
  const {data} = apiResponse;
  return data;
};

export const getUsers = () => {
  return fetch('http://localhost:3000/api/users/')
    .then(res => res.json())
    .then(fromApiResponse);
};

//  .then(fromApiResponse); 
//  == 
//.then( res => {return fromApiResponse(res)})