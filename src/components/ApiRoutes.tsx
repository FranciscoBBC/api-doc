import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import ApiRoutesModel from '@models/components/ApiRoutesModel';

const ApiRoutes: React.FC<ApiRoutesModel> = ({ routes }: ApiRoutesModel) => {
  const [menuColapse, setMenuColapse] = React.useState([]);
  const [selectMenu, setSelectMenu] = React.useState();

  const renderRoutes = apiRoutes => {
    const renderSubMenu = (arr, val) => {
      if (arr.includes(val)) {
        setMenuColapse(arr.filter(value => value !== val));
      } else {
        setMenuColapse([...menuColapse, val]);
      }
    };

    if (!Array.isArray(apiRoutes)) return null;
    return (
      <ul data-testid="items-wrapper">
        {apiRoutes.map(val => {
          if (val.group) {
            return (
              <li key={Math.random()} data-testid="list-group">
                <div
                  className="py-3 px-3 cursor-pointer text-gray-700"
                  onClick={() => renderSubMenu(menuColapse, val.group)}
                >
                  {val.group}
                </div>
                <ul
                  key={Math.random()}
                  className={`mx-3 transition duration-500 ease-in-out ${
                    menuColapse.includes(val.group) ? 'block' : ' hidden'
                  }`}
                >
                  {val.link.map(link => (
                    <li
                      key={Math.random()}
                      data-testid="list-item"
                      className={`py-3 px-3 mx-2 cursor-pointer text-gray-600 rounded-md flex justify-between items-center ${
                        selectMenu === link.name
                          ? 'bg-white text-oceanBlue shadow-sm'
                          : 'bg-transparent'
                      }`}
                      onClick={() => setSelectMenu(link.name)}
                    >
                      {link.name}
                      {selectMenu === link.name ? (
                        <BsArrowRight className="text-xl" />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          if (val.link) {
            return val.link.map(link => (
              <li
                key={Math.random()}
                data-testid="list-item"
                className={`py-3 px-3 text-gray-700 cursor-pointer rounded-md flex justify-between items-center ${
                  selectMenu === link.name
                    ? 'bg-white text-oceanBlue shadow-sm'
                    : 'bg-transparent'
                }`}
                onClick={() => setSelectMenu(link.name)}
              >
                {link.name}
                {selectMenu === link.name ? (
                  <BsArrowRight className="text-xl" />
                ) : null}
              </li>
            ));
          }
          return null;
        })}
      </ul>
    );
  };

  return <div>{renderRoutes(routes)}</div>;
};

export default ApiRoutes;
