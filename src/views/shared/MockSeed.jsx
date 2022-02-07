import imageProfile1 from '../../assets/images/mockPersonas/student-1.png';
import imageProfile2 from '../../assets/images/mockPersonas/student-2.png';
import imageProfile3 from '../../assets/images/mockPersonas/student-3.png';


const mockSeed = [
  {
    id: '1',
    name: ' Mariana Ferraz',
    age: '22',
    pronoun: 'Ela/Dela',
    description:
      'Na primeira mentoria eu não sabia quem eu era, definir meus sonhos ou para onde eu estava indo. Ter a oportunidade de ser mentorada no primeiro semestre da minha (tão sonhada) faculdade fez total diferença. Hoje, sinto que me conheço mais, sei como e o que estou fazendo para alcançar meus sonhos.',
    college: 'UNESP - Universidade Estadual Paulista',
    course: 'Engenharia de Produção',
    imageProfile: imageProfile2,
    linkedin: 'https://www.linkedin.com/in/mariana-ferraz-991181215/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-22T14:48:00'),
    isConfirmed: false,
    isRejected: false,
    isExperired: false,
    acceptedDate: Date.parse('2001-01-01T00:00:00'),
    rejectedDate: Date.parse('2001-01-01T00:00:00'),
    project: 'PlantYou',
  },
  {
    id: '2',
    name: ' Jéssica Gonsalves',
    age: '22',
    pronoun: 'Ela/Dela',
    description:
      'Ser mentoranda me permitiu tomar consciência do meu próprio protagonismo e em como consigo pontencializá-lo na minha jornada. Mais do que isso, me permitiu construir em conjunto com a minha mentora, um processo sistêmico de reflexão, concepção e tomada de decisões.',
    college: 'Universidade de São Paulo',
    course: 'Engenharia Elétrica',
    imageProfile: imageProfile3,
    linkedin: 'https://www.linkedin.com/in/gonsalvesjessica/',
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-23T14:48:00'),
    isConfirmed: false,
    isRejected: false,
    isExperired: false,
    acceptedDate: Date.parse('2001-01-01T00:00:00'),
    rejectedDate: Date.parse('2001-01-01T00:00:00'),
    project: 'Pontapé Empreendedor',
  },
  {
    id: '3',
    name: ' Pedro Masetti',
    age: '21',
    pronoun: 'Ele/Dele',
    description:
      'A oportunidade de poder me conectar através das mentorias com pessoas já ambientadas no mercado de trabalho vêm trazendo diversos benefícios, e principalmente, auxiliando no meu autoconhecimento',
    linkedin: 'https://www.linkedin.com/in/pedro-masetti-3535321a9/',
    college: 'UNESP - Universidade Estadual Paulista',
    course: 'Engenharia Ambiental',
    imageProfile: imageProfile1,
    email: 'example@gmail.com',
    whatsapp: '(12) 345678910',
    invitedDate: Date.parse('2021-11-22T14:48:00'),
    isConfirmed: false,
    isRejected: false,
    isExperired: false,
    acceptedDate: Date.parse('2001-01-01T00:00:00'),
    rejectedDate: Date.parse('2001-01-01T00:00:00'),
    project: 'Programa de Carreira',
  },
];
export default mockSeed;