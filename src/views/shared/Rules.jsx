const MAX_AREA = 3;
const MAX_SUBAREA = 10;
const MIN_OLD = 16;
const MAX_OLD = 120;

const rules = {
  name: [
    {
      required: true,
      pattern: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
      message: 'Por favor, preencha seu nome!',
    },
  ],
  lastname: [
    {
      required: true,
      pattern: /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/,
      message: 'Por favor, preencha seu último nome!',
    },
  ],
  email: [
    {
      required: true,
      type: 'email',
      message: 'Digite um e-mail válido',
    },
  ],
  cpf: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      message: '',
    },
    {
      validator: (_, value) => cpfValidator(value),
      message: 'Digite um CPF válido!',
    },
  ],
  phoneNumber: [
    {
      required: true,
      message: 'Digite um número telefone de válido',
    },
  ],
  select: [
    {
      required: true,
      message: 'Escolha uma opção',
    },
  ],
  day: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      validator: (_, value) => {
        if (value > 0 && value <= 31) return Promise.resolve();
        else return Promise.reject('Date is invalid');
      },
      message: 'Dia inválido',
    },
  ],
  month: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      validator: (_, value) => {
        if (value > 0 && value <= 12) return Promise.resolve();
        else return Promise.reject('Month is invalid');
      },
      message: 'Mês inválido',
    },
  ],
  year: [
    {
      required: true,
      pattern: /^(?:\d*)$/,
      validator: (_, value) => {
        const currentYear = new Date().getFullYear();
        if (value >= currentYear - MAX_OLD && value <= currentYear - MIN_OLD)
          return Promise.resolve();
        else return Promise.reject('Year is invalid');
      },
      message: 'Ano inválido',
    },
  ],
  birthdate: [
    {
      required: true,
      message: 'Digite a sua data de nascimento',
    },
  ],
  linkedin: [
    {
      required: true,
      validator: (_, value) => linkedinValidator(value),
      message: 'Digite uma URL válida para o seu perfil LinkedIn',
    },
  ],
  selectArea: [
    {
      required: true,
      message: 'Escolha ao menos uma opção',
    },
    {
      type: 'array',
      max: MAX_AREA,
      message: `Escolha no máximo ${MAX_AREA} opções`,
    },
  ],
  selectSubarea: [
    {
      required: true,
      message: 'Escolha ao menos uma opção',
    },
    {
      type: 'array',
      max: MAX_SUBAREA,
      message: `Escolha no máximo ${MAX_SUBAREA} opções`,
    },
  ],
  company: [
    {
      required: true,
      message: 'Digite a empresa em que você trabalha',
    },
  ],
  position: [
    {
      required: true,
      message: 'Digite o cargo que você ocupa',
    },
  ],
};
export default rules;

const cpfValidator = (value) => {
  if (!value) return Promise.reject('CPF Inválido 1');
  value = value.toString().replace(/[^\d]+/g, '');
  // Elimina values invalidos conhecidos
  if (
    value == '00000000000' ||
    value == '11111111111' ||
    value == '22222222222' ||
    value == '33333333333' ||
    value == '44444444444' ||
    value == '55555555555' ||
    value == '66666666666' ||
    value == '77777777777' ||
    value == '88888888888' ||
    value == '99999999999' ||
    value == '111111111111' ||
    value == '222222222222' ||
    value == '333333333333' ||
    value == '444444444444' ||
    value == '555555555555' ||
    value == '666666666666' ||
    value == '777777777777' ||
    value == '888888888888' ||
    value == '999999999999'
  )
    return Promise.reject('CPF Inválido 2');
  let valueString = value;
  if (valueString.length == 10) valueString = `0${value}`;

  // Valida 1o digito
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(valueString.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(valueString.charAt(9))) return Promise.reject('CPF Inválido 3 ');
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(valueString.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(valueString.charAt(10))) return Promise.reject('CPF Inválido 4');
  return Promise.resolve();
};

const isRegexExactMatch = (value, regexp) => {
  const res = value.match(regexp);
  return res && res[0] && res[0] === res.input;
};

const linkedinValidator = (value) => {
  const linkedInProfileURLRegExp =
    '(https?:\\/\\/(www.)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?)';
  const valueOptions = [`${value}`, `https://www.${value}`, `https://www.linkedin.com/${value}`];

  const res = valueOptions.some((item) => {
    return isRegexExactMatch(item, linkedInProfileURLRegExp);
  });
  if (res) return Promise.resolve();
  return Promise.reject('URL Inválida');
};