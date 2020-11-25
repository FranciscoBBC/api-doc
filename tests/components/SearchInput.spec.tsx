import { render, screen } from '@testing-library/react';

import React from 'react';
import SearchInput from '../../components/SearchInput';

describe('testing SearchInput.tsx', () => {
  describe('rendering', () => {
    it('should be able to render', () => {
      render(<SearchInput />);
    });
  });
});
