import React from 'react';
import SearchIput from '@components/SearchInput';
import ApiRoutes from '@components/ApiRoutes';

const Menu = ({ handleChange }: { handleChange: (val: string) => null }) => {
  const mock = [
    {
      group: 'user',
      link: [
        {
          name: 'create',
          description: 'create a user',
          params: {
            userName: 'string',
            email: 'string',
            password: 'string'
          },
          requestExample: ''
        },
        {
          name: 'update',
          description: 'update a user',
          params: {
            userName: 'string',
            email: 'string',
            password: 'string'
          },
          requestExample: ''
        },
        {
          name: 'delete',
          description: 'delete a user',
          params: {
            email: 'string'
          },
          requestExample: ''
        }
      ]
    },
    {
      link: [
        {
          name: 'store',
          description: 'list stores',
          params: {
            storeName: 'string'
          },
          requestExample: ''
        }
      ]
    },
    {
      group: 'product',
      link: [
        {
          name: 'getProduct',
          description: 'return a list of products',
          params: {
            productName: 'string'
          },
          requestExample: ''
        },
        {
          name: 'deleteProduct',
          description: 'delete a product',
          params: {
            productName: 'string'
          },
          requestExample: ''
        }
      ]
    }
  ];

  const [routes, setRoutes] = React.useState(mock);

  return (
    <div className="p-4">
      <div className="border-b">
        <h1 className="text-2xl font-medium text-gray-900">API DOC</h1>
      </div>
      <SearchIput handleSearch={setRoutes} />
      <ApiRoutes routes={routes} handleChange={handleChange} />
    </div>
  );
};

export default Menu;
