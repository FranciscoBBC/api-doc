import React from 'react';
import ApiRoutesModel from '@models/components/ApiRoutesModel';

const ApiRoutes = ({ routes }: ApiRoutesModel) => {
  const renderRoutes = apiRoutes => {
    if (!Array.isArray(routes)) return null;

    return (
      <ul>
        {routes.map(val => {
          if (val.group) {
            return (
              <li key={Math.random()} data-testid="list-group">
                {val.group}
                <ul key={Math.random()}>
                  {val.link.map(link => (
                    <li key={Math.random()} data-testid="list-item">
                      {link}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return val.link.map(link => (
            <li key={Math.random()} data-testid="list-item">
              {link}
            </li>
          ));
        })}
      </ul>
    );
  };

  return <div>{renderRoutes(routes)}</div>;
};

export default ApiRoutes;
