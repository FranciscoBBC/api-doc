import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiRoutes from '../../src/components/ApiRoutes';

describe('testing ApiRoutes.tsx', () => {
  describe('with valid data', () => {
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

    it('testing group children rendering', () => {
      render(<ApiRoutes routes={mock} />);
      const listGroups = screen.getAllByTestId('list-group');
      const groupItems = listGroups[0].getElementsByTagName('li');

      expect(groupItems.length).toEqual(3);
      expect(groupItems[0].innerHTML).toMatch('create');
      expect(groupItems[1].innerHTML).toMatch('update');
      expect(groupItems[2].innerHTML).toMatch('delete');
    });
  });

  // describe('without data', () => {});

  // describe('with invalid data', () => {});

  // describe('open route', () => {});
});
