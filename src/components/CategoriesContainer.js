import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import store from '../redux/configureStore';

const CategoriesContainer = () => {
  const [dynamicContent, setDynamicContent] = useState([]);
  const dispatch = useDispatch();

  const displayStatus = () => {
    dispatch(checkStatus());
    const status = store.getState().categories;
    const dynamicEl = React.createElement('p', {}, status);
    setDynamicContent(dynamicEl);
  };

  return (
    <div>
      <button onClick={displayStatus} type="button">Check status</button>
      {dynamicContent}
    </div>
  );
};

export default CategoriesContainer;
