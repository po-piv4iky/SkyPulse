export const formatDate = (dt: number) =>
  new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
  }).format(new Date(dt * 1000))
