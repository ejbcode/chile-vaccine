export const formatingNumber = (number: number) => {
  return new Intl.NumberFormat('es-ES').format(number);
};
