import React from 'react';
import ApiRoutesModel from '@models/components/ApiRoutesModel';

const ApiRoutes: React.FC = ({ routes }: ApiRoutesModel) => {
  const [menuColapse, setMenuColapse] = React.useState([]);
  const [selectMenu, setSelectMenu] = React.useState();

  React.useEffect(() => {
    console.log(selectMenu);
  }, [selectMenu]);

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
                <ul>
                  <li
                    className="py-3 px-3 cursor-pointer text-gray-700"
                    onClick={() => renderSubMenu(menuColapse, val.group)}
                  >
                    {val.group}
                  </li>
                </ul>
                {/* {menuColapse.includes(val.group) ? ( */}
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
                      className={`py-3 px-3 mx-2 cursor-pointer text-gray-600 rounded-md ${
                        selectMenu === link
                          ? 'bg-white text-oceanBlue shadow-sm'
                          : 'bg-transparent'
                      }`}
                      onClick={() => setSelectMenu(link)}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
                {/* ) : null} */}
              </li>
            );
          }
          if (val.link) {
            return val.link.map(link => (
              <li
                key={Math.random()}
                data-testid="list-item"
                className={`py-3 px-3 text-gray-700 cursor-pointer rounded-md ${
                  selectMenu === link
                    ? 'bg-white text-oceanBlue shadow-sm'
                    : 'bg-transparent'
                }`}
                onClick={() => setSelectMenu(link)}
              >
                {link}
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
