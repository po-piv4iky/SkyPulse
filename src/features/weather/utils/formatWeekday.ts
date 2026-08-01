export const formatWeekday = (timestamp: number) => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(new Date(timestamp * 1000))
}
