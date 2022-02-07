import React, {useState} from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Loading() {
  let [loading] = useState(true);

  return <ClipLoader loading={loading} />;
}

export default Loading;
