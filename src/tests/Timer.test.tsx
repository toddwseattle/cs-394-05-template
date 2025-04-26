import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import Timer from '../components/Timer';
/*
potential tests:
1. a <Timer/> component is created
2. it should set the duration to the number of seconds passed in and format properly with formatDuration
3. When the start property is true, the timer should start counting down from the duration
4. When the stop property is true, the timer should stop counting down
5. When the reset property is true, the timer should reset to the original duration
6. When the timer reaches 0, it should call the onFinish callback if provided
7. When the timer is paused, it should not count down
8. When the timer is resumed, it should continue counting down from where it left off
10. if onFinish is not provided, it should not throw an error when the timer reaches 0
11. if no duration is provided, it should default to 10 seconds
12. if the duration is less than 0, it should default to 0 seconds

*/
describe('the first set of basic timer tests', () => {
  it('A Timer Component is created', () => {
    const component = render(<Timer secondsDuration={1} />);
    screen.debug();
    expect(component).toBeDefined();
  });
});
