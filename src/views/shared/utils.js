export const setTimeFormat = (date, type = 'day') => {
  const day = date.getDate();
  console.log(day)
  const month = date.getMonth() + 1;
  if (type == 'day') return day < 10 ? `0${day}` : `${day}`;
  else return month < 10 ? `0${month}` : `${month}`;
};

export const getDifferenceBetweenDates = (dateOne, dateTwo =  new Date()) => {
  const diffTime = Math.abs(dateOne - dateTwo);
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60)) % 24;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return [diffHours, diffDays];
}