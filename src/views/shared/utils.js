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

export const cpfMask = (value) => {
  let valueString = value;
  if (valueString.length == 10) valueString = `0${value}`;
  {
    return valueString
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }
};