export const formatSeconds = (seconds: number): string => {
  // Calculate minutes and remaining seconds
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  // Pad with zeros to ensure two digits
  const formattedMins = mins.toString().padStart(2, '0');
  const formattedSecs = secs.toString().padStart(2, '0');

  // Return the formatted string
  return `${formattedMins}:${formattedSecs}`;
};
