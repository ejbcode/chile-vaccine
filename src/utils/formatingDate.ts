export const formatingDate = (string: string) => {
  return new Date(string).toLocaleDateString('es-CL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Australia/Sydney',
    // timeZone: "America/Santiago",
  });
};
