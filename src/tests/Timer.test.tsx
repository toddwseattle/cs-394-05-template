import '@testing-library/jest-dom';

import { act, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

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
    const component = render(<Timer secondsDuration={1} isRunning={false} />);
    screen.debug();
    expect(component).toBeDefined();
  });
  it('it should set the duration to the number of seconds passed in and format properly with formatDuration', () => {
    const secondsDuration = 1234567;
    render(<Timer secondsDuration={secondsDuration} isRunning={false} />);
    const formattedDuration = '14:06:56:07'; // Expected formatted duration
    expect(screen.getByText(formattedDuration)).toBeInTheDocument();
  });
  it('it should take a isRunning property and start counting down from the duration', () => {
    const secondsDuration = 10;
    const isRunning = true;
    const isPaused = false;
    vi.useFakeTimers(); // Mock timers
    render(
      <Timer
        secondsDuration={secondsDuration}
        isRunning={isRunning}
        isPaused={isPaused}
      />,
    );
    expect(screen.getByText('00:00:00:10')).toBeInTheDocument();
    // Simulate the passage of time (e.g., using jest.advanceTimersByTime)
    act(() => {
      vi.advanceTimersByTime(1000); // Fast-forward 1 second
    });
    expect(screen.getByText('00:00:00:09')).toBeInTheDocument();
  });
  it('it should stop counting when the pause property is true', async () => {
    const secondsDuration = 10;
    const isRunning = true;
    const isPaused = true;
    vi.useFakeTimers(); // Mock timers
    render(
      <Timer
        secondsDuration={secondsDuration}
        isRunning={isRunning}
        isPaused={isPaused}
      />,
    );
    expect(screen.getByText('00:00:00:10')).toBeInTheDocument();
    // Simulate the passage of time (e.g., using jest.advanceTimersByTime)
    await act(async () => {
      vi.advanceTimersByTime(2000); // Fast-forward past the end of the timer
    });
    expect(screen.getByText('00:00:00:10')).toBeInTheDocument();
  });
  it('it should call the complete callback when the timer reaches 0', async () => {
    const secondsDuration = 1;
    const isRunning = true;
    const isPaused = false;
    const completeCallback = vi.fn(); // Mock function
    vi.useFakeTimers(); // Mock timers

    render(
      <Timer
        secondsDuration={secondsDuration}
        isRunning={isRunning}
        isPaused={isPaused}
        complete={completeCallback}
      />,
    );

    expect(screen.getByText('00:00:00:01')).toBeInTheDocument();

    // Wrap timer updates in act
    await act(async () => {
      vi.advanceTimersByTime(2000); // Fast-forward past the end of the timer
    });

    // Wait for the timer to update and reach 0

    // Verify callback was called
    expect(completeCallback).toHaveBeenCalledTimes(1);

    // Clean up timers
    vi.useRealTimers();
  });
});
