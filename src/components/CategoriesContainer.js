import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesContainer = () => {
  const [dynamicContent, setDynamicContent] = useState([]);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const displayStatus = () => {
    dispatch(checkStatus());
    const dynamicEl = React.createElement('p', {}, status);
    setDynamicContent(dynamicContent.concat(dynamicEl));
  };

  return (
    <div>
      <button onClick={displayStatus} type="button">Check status</button>
      {dynamicContent}
    </div>
  );
};

export default CategoriesContainer;
