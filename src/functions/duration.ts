export function formatDuration(seconds: number): string {
  const days = Math.floor(seconds / 86400); // 86400 seconds in a day
  const remainingSeconds = seconds % 86400;

  const hours = Math.floor(remainingSeconds / 3600); // 3600 seconds in an hour
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingSecondsFinal = remainingSeconds % 60;

  // Format each component with leading zeros
  const formattedDays = days.toString().padStart(2, '0');
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSecondsFinal.toString().padStart(2, '0');

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
const totalSeconds = 1234567;
const formattedDuration = formatDuration(totalSeconds);
console.log(formattedDuration); // Outputs: "14:06:56:07"
