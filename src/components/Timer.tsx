import { formatDuration } from '../functions/duration';

interface TimerProps {
  secondsDuration: number;
  // you will need to add other props here
}

function Timer({ secondsDuration }: TimerProps) {
  return <h1>{formatDuration(secondsDuration)}</h1>;
}

export default Timer;
