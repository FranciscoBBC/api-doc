import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ApiRoutes from '../../src/components/ApiRoutes';

describe('testing ApiRoutes.tsx', () => {
  describe('with valid data', () => {
    it('testing group children rendering', () => {
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
        }
      ];

      render(<ApiRoutes routes={mock} />);
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
        }
      ];

      render(<ApiRoutes routes={mock} />);
      const item = screen.getByTestId('list-item');

      expect(item.innerHTML).toMatch('store');
    });
  });

  it('without data', () => {
    const mock = [];
    render(<ApiRoutes routes={mock} />);

    const wrapper = screen.getByTestId('items-wrapper');
    expect(wrapper.innerHTML.length === 0).toBeTruthy();
  });
});
