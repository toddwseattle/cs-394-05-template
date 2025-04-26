import { formatDuration } from '../functions/duration';

interface TimerProps {
  secondsDuration: number;
}

function Timer({ secondsDuration }: TimerProps) {
  return <h1>{formatDuration(secondsDuration)}</h1>;
}

export default Timer;
