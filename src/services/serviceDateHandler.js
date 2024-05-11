export const getDateString = data => {
  const string = new Date(data);
  const date = string.getDate();
  const month = string.getMonth();
  const year = string.getFullYear();

  return `${date} / ${month + 1} / ${year}`;
};
