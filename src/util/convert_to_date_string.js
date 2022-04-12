export const convert_to_date_string = (time) => {
  let date = new Date(time * 1000);
  date = date.toLocaleString();
  return date;
};
