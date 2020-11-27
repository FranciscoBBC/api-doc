import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import SearchInput from '../../src/components/SearchInput';

describe('testing SearchInput.tsx', () => {
  describe('search callback', () => {
    it('should be fire callback', () => {
      const mockOnChange = jest.fn();
      render(<SearchInput handleSearch={mockOnChange} />);

      const input = screen.getByTestId('search-input');
      fireEvent.change(input, { target: { value: 'cashback' } });

      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
