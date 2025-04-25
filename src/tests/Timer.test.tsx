import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import Timer from '../components/Timer';
/*
potential tests:
1. a <Timer/> component is created
2. ...
*/
describe('the first set of basic timer tests', () => {
  it('A Timer Component is created', () => {
    const component = render(<Timer secondsDuration={1} />);
    screen.debug();
    expect(component).toBeDefined();
  });
});
