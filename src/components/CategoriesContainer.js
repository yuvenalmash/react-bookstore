import React, { useState } from 'react';
import store from '../redux/configureStore';

const CategoriesContainer = () => {
  const [dynamicContent, setDynamicContent] = useState([]);
  const categories = store.getState().categories[0];
  const displayStatus = () => {
    const dynamicEl = React.createElement('p', {}, categories.status);
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
