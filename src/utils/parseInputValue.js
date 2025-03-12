export const parseInputValue = value =>
  typeof value === 'string' ? Number(value?.replace(',', '')) : null;
