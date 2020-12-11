import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiRoutes from '../../src/components/ApiRoutes';

describe('testing ApiRoutes.tsx', () => {
  describe('with valid data', () => {
    it('testing group children rendering', () => {
      const mock = [
        {
          group: 'user',
          link: ['create', 'update', 'delete']
        },
        {
          link: ['offers']
        },
        {
          group: 'categories',
          link: ['list', 'update']
        },
        {
          link: ['cashback']
        }
      ];

      render(<ApiRoutes routes={mock} />);
      const listGroups = screen.getAllByTestId('list-group');
      const groupItems = listGroups[0].getElementsByTagName('li');

      expect(groupItems.length).toEqual(4);
      expect(groupItems[0].innerHTML).toMatch('user');
      expect(groupItems[1].innerHTML).toMatch('create');
      expect(groupItems[2].innerHTML).toMatch('update');
      expect(groupItems[3].innerHTML).toMatch('delete');
    });

    it('testing single element', () => {
      const mock = [
        {
          link: ['cashback']
        }
      ];

      render(<ApiRoutes routes={mock} />);
      const item = screen.getByText('cashback');

      expect(item.innerHTML).toMatch('cashback');
    });
  });

  describe('without data', () => {
    const mock = [];
    render(<ApiRoutes routes={mock} />);

    const wrapper = screen.getByTestId('items-wrapper');
    expect(wrapper.innerHTML.length === 0).toBeTruthy();
  });

  describe('with invalid data', () => {
    const mock = { test: 'testing data' };
    render(<ApiRoutes routes={mock} />);
  });

  // describe('open route', () => {});
});
