import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { RocketOutlined, LockFilled, UnlockFilled, CheckSquareFilled } from '@ant-design/icons';
import { MenuModel } from '../../../components/MenuModel';
import { Section } from '../../../components/Section';

import WheelComponent from './WheelComponent';
import StepWelcome from './StepWelcome';

import Styles from './Seed.module.scss'


export default function Seed() {
  const menuItems = [
    {
      key: 'begin',
      title: 'Bem vindo!',
      icon: <RocketOutlined />,
    },
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const [stepFinished, setStepFinished] = useState(0);

  const wheelContent = [
    {
      title: 'Etapa 1',
      disabled: false,
      icon: <UnlockFilled />,
    },
    {
      title: 'Etapa 2',
      disabled: true,
      icon: <LockFilled />,
    },
    {
      title: 'Etapa 3',
      disabled: true,
      icon: <LockFilled />,
    },
  ];

  const [contentUpdated, setContentUpdated] = useState(wheelContent);

  const onClickButtonStep = (index) => {
    setContentIndex(index);
  };

  const onClickButtonSend = (index, step) => {
    setContentIndex(index);
    setStepFinished(step);
    contentUpdated[step - 1].disabled = true;
    contentUpdated[step - 1].icon = <CheckSquareFilled />;
    if (step - 1  < contentUpdated.length - 1) {
      contentUpdated[step].disabled = false;
      contentUpdated[step].icon = <UnlockFilled />;
    }
    setContentUpdated(contentUpdated);
  };


  const content = [
    <StepWelcome
      contentSteps={contentUpdated}
      onClick={onClickButtonStep}
      step={stepFinished}
      key="begin"
    />,
    <WheelComponent onClick={onClickButtonSend} contentAssessment={firstWheel} step={1} />,
    <WheelComponent onClick={onClickButtonSend} contentAssessment={secondWheel} step={2} />,
    <WheelComponent onClick={onClickButtonSend} contentAssessment={thirdWheel} step={3} />,
  ];

  return (
    <Fragment>
      <MenuModel menuItems={menuItems} userType="seed" />
      <Section>
        <Row gutter={[32, 20]} align="middle" justify="center">
          <Col xs={23} sm={23} md={20} lg={22} xl={22}>
            {content[contentIndex]}
          </Col>
        </Row>
      </Section>
    </Fragment>
  );
}

const firstWheel = [
  {
    title: 'Moradia',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia o local em que voc?? vive?',
    neutral:
      'Entendo a influ??ncia do lar sobre mim e considero que moro em  um ambiente com condi????es de higiene e privacidade onde posso descansar,  e me sinto seguro em rela????o ??s pessoas com quem convivo dentro de casa.',
    gif: 'https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif',
  },
  {
    title: 'Alimenta????o',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a sua alimenta????o?',
    neutral:
      'Sei a import??ncia de uma boa alimenta????o como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, fa??o refei????es de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
  },
  {
    title: 'Gest??o de Rotina',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia sua gest??o de rotina?',
    neutral:
      'Sei que existem mais oportunidades ?? minha disposi????o do que  tempo dispon??vel, entendo o b??sico da minha hierarquia de necessidades e  tento aplicar o conceito de gest??o de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha sa??de ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
  },
  {
    title: 'Pertencimento',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a sua sensa????o de pertencimento?',
    neutral:
      'Sei a import??ncia de uma boa alimenta????o como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, fa??o refei????es de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
  },
  {
    title: 'Atividade F??sica',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a sua pr??tica de exerc??cios f??sicos?',
    neutral:
      'Sei a import??ncia da pr??tica de exerc??cios f??sicos como fonte de energia para o melhor funcionamento do meu corpo e mente e tento os praticar pelo menos 3 vezes na semana.',
    gif: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
  },
  {
    title: 'Descanso',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a qualidade do seu descanso?',
    neutral:
      'Sei que o sono e o descanso est??o diretamente relacionados com minha  capacidade de aprendizado, meu n??vel de ansiedade e meu equil??brio f??sico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recupera????o na maior parte do m??s.',
    gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
  },
];

const secondWheel = [
  {
    title: 'Autoestima',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a sua alimenta????o?',
    neutral:
      'Sei a import??ncia de uma boa alimenta????o como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, fa??o refei????es de qualidade nutricional suficiente.',
    gif: 'https://giphy.com/gifs/funny-cute-dog-hfpajDwL3NeHm',
  },
  {
    title: 'Autolideran??a',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia sua Autolideran??a?',
    neutral:
      'Sei que existem mais oportunidades ?? minha disposi????o do que  tempo dispon??vel, entendo o b??sico da minha hierarquia de necessidades e  tento aplicar o conceito de gest??o de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha sa??de ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
  },
  {
    title: 'Sonhar Grande',
    subtitle:
      'Com base no n??vel neutro, como voc?? avalia o quesito Sonhar Grande na sua vida?',
    neutral:
      'Sei a import??ncia de uma boa alimenta????o como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, fa??o refei????es de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
  },
  {
    title: 'Capital Cultural',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia o seu Capital Cultural?',
    neutral:
      'Sei a import??ncia da pr??tica de exerc??cios f??sicos como fonte de energia para o melhor funcionamento do meu corpo e mente e tento os praticar pelo menos 3 vezes na semana.',
    gif: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
  },
  {
    title: 'Expedi????o de Carreira',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a sua Expedi????o de Carreira?',
    neutral:
      'Sei que o sono e o descanso est??o diretamente relacionados com minha  capacidade de aprendizado, meu n??vel de ansiedade e meu equil??brio f??sico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recupera????o na maior parte do m??s.',
    gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
  },
];

const thirdWheel = [
  {
    title: 'Expectativas de Carreira',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia o local em que voc?? vive?',
    neutral:
      'Entendo a influ??ncia do lar sobre mim e considero que moro em  um ambiente com condi????es de higiene e privacidade onde posso descansar,  e me sinto seguro em rela????o ??s pessoas com quem convivo dentro de casa.',
    gif: 'https://giphy.com/gifs/boxycharm-OuMFETEGgiG6F2L3uO',
  },
  {
    title: 'Feedbacks',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a forma que voc?? lida com feedbacks?',
    neutral:
      'Sei a import??ncia de uma boa alimenta????o como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, fa??o refei????es de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
  },
  {
    title: 'R??gua do Mercado',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia sua gest??o de rotina?',
    neutral:
      'Sei que existem mais oportunidades ?? minha disposi????o do que  tempo dispon??vel, entendo o b??sico da minha hierarquia de necessidades e  tento aplicar o conceito de gest??o de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha sa??de ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
  },
  {
    title: 'Ciclos de Carreira',
    subtitle:
      'Com base no n??vel neutro, como voc?? avalia a sua sensa????o de pertencimento no n??cleo familiar?',
    neutral:
      'Sei a import??ncia de uma boa alimenta????o como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, fa??o refei????es de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
  },
  {
    title: 'Fit Carreira vs Fit Time',
    subtitle: 'Com base no n??vel neutro, como voc?? avalia a qualidade do seu descanso?',
    neutral:
      'Sei que o sono e o descanso est??o diretamente relacionados com minha  capacidade de aprendizado, meu n??vel de ansiedade e meu equil??brio f??sico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recupera????o na maior parte do m??s.',
    gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
  },
];
