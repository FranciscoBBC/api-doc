import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ApiRoutes from '../../src/components/ApiRoutes';

describe('testing ApiRoutes.tsx', () => {
  describe('with valid data', () => {
    it('testing group children rendering', () => {
      const mock = [
        {
          id: '12345',
          data: {
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
          }
        },
        {
          data: {
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
          id: '12345'
        }
      ];

      render(
        <ApiRoutes routes={mock} handleChange={val => console.log(val)} />
      );
      const listGroups = screen.getByTestId('list-group');
      const group = listGroups.getElementsByTagName('div');
      const groupItems = listGroups.getElementsByTagName('li');

      expect(group[0].innerHTML).toMatch('user');
      expect(groupItems.length).toEqual(3);

      expect(groupItems[0].innerHTML).toMatch('create');
      expect(groupItems[1].innerHTML).toMatch('update');
      expect(groupItems[2].innerHTML).toMatch('delete');
    });

    it('testing single element', () => {
      const mock = [
        {
          data: {
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
          id: '12345'
        }
      ];

      render(
        <ApiRoutes routes={mock} handleChange={val => console.log(val)} />
      );
      const item = screen.getByTestId('list-item');

      expect(item.innerHTML).toMatch('store');
    });
  });

  it('without data', () => {
    const mock = [];
    render(<ApiRoutes routes={mock} handleChange={val => console.log(val)} />);

    const wrapper = screen.getByTestId('items-wrapper');

    expect(wrapper.childElementCount === 1).toBeTruthy();
    expect(wrapper.firstChild.type).toEqual('button');
  });
});
