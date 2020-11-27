import React from 'react';
import ApiRoutesModel from '@models/components/ApiRoutesModel';

const ApiRoutes = ({ routes }: ApiRoutesModel) => {
  const renderRoutes = apiRoutes => {
    if (!Array.isArray(routes)) return null;

    return (
      <ul>
        {apiRoutes.map((val, key) => (
          <li data-testid={val} key={val}>
            {val}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderRoutes(routes)}</div>;
};

export default ApiRoutes;
