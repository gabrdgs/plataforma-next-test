import React, { Fragment, useState, useEffect } from 'react';
import { Button, Col, Row, Space } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import { MenuModel } from '../../../components/MenuModel';
import { LockFilled, UnlockFilled, CheckSquareFilled } from '@ant-design/icons';

import WheelComponent from './WheelComponent';
import StepWelcome from './StepWelcome';

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

  const onClickButton = (index, step) => {
    setContentIndex(index);
    setStepFinished(step);
    setContentUpdated(wheelContent);
  };

  useEffect(() => {
    if (stepFinished) {
      wheelContent[stepFinished - 1].disabled = true;
      wheelContent[stepFinished - 1].icon = <CheckSquareFilled />;
      if (stepFinished < wheelContent.length) {
        wheelContent[stepFinished].disabled = false;
        wheelContent[stepFinished].icon = <UnlockFilled />;
      }
    }
  });

  const content = [
    <StepWelcome
      contentSteps={contentUpdated}
      onClick={onClickButton}
      step={stepFinished}
      key="begin"
    />,
    <WheelComponent onClick={onClickButton} contentAssessment={firstWheel} step={1} />,
    <WheelComponent onClick={onClickButton} contentAssessment={secondWheel} step={2} />,
    <WheelComponent onClick={onClickButton} contentAssessment={thirdWheel} step={3} />,
  ];

  return (
    <Fragment>
      <MenuModel menuItems={menuItems} userType="seed" />
      <Row gutter={[32, 16]} align="middle" justify="center">
        <Col xs={23} sm={23} md={20} lg={22} xl={22}>
          {content[contentIndex]}
        </Col>
      </Row>
    </Fragment>
  );
}

const firstWheel = [
  {
    title: 'Moradia',
    subtitle: 'Com base no nível neutro, como você avalia o local em que você vive?',
    neutral:
      'Entendo a influência do lar sobre mim e considero que moro em  um ambiente com condições de higiene e privacidade onde posso descansar,  e me sinto seguro em relação às pessoas com quem convivo dentro de casa.',
    gif: 'https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif',
  },
  {
    title: 'Alimentação',
    subtitle: 'Com base no nível neutro, como você avalia a sua alimentação?',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
  },
  {
    title: 'Gestão de Rotina',
    subtitle: 'Com base no nível neutro, como você avalia sua gestão de rotina?',
    neutral:
      'Sei que existem mais oportunidades à minha disposição do que  tempo disponível, entendo o básico da minha hierarquia de necessidades e  tento aplicar o conceito de gestão de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha saúde ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
  },
  {
    title: 'Pertencimento',
    subtitle: 'Com base no nível neutro, como você avalia a sua sensação de pertencimento?',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
  },
  {
    title: 'Atividade Física',
    subtitle: 'Com base no nível neutro, como você avalia a sua prática de exercícios físicos?',
    neutral:
      'Sei a importância da prática de exercícios físicos como fonte de energia para o melhor funcionamento do meu corpo e mente e tento os praticar pelo menos 3 vezes na semana.',
    gif: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
  },
  {
    title: 'Descanso',
    subtitle: 'Com base no nível neutro, como você avalia a qualidade do seu descanso?',
    neutral:
      'Sei que o sono e o descanso estão diretamente relacionados com minha  capacidade de aprendizado, meu nível de ansiedade e meu equilíbrio físico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recuperação na maior parte do mês.',
    gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
  },
];

const secondWheel = [
  {
    title: 'Autoestima',
    subtitle: 'Com base no nível neutro, como você avalia a sua alimentação?',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://giphy.com/gifs/funny-cute-dog-hfpajDwL3NeHm',
  },
  {
    title: 'Gestão de Rotina',
    subtitle: 'Com base no nível neutro, como você avalia sua gestão de rotina?',
    neutral:
      'Sei que existem mais oportunidades à minha disposição do que  tempo disponível, entendo o básico da minha hierarquia de necessidades e  tento aplicar o conceito de gestão de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha saúde ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
  },
  {
    title: 'Pertencimento',
    subtitle:
      'Com base no nível neutro, como você avalia a sua sensação de pertencimento no núcleo familiar?',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
  },
  {
    title: 'Atividade Física',
    subtitle: 'Com base no nível neutro, como você avalia a sua prática de exercícios físicos?',
    neutral:
      'Sei a importância da prática de exercícios físicos como fonte de energia para o melhor funcionamento do meu corpo e mente e tento os praticar pelo menos 3 vezes na semana.',
    gif: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
  },
  {
    title: 'Descanso',
    subtitle: 'Com base no nível neutro, como você avalia a qualidade do seu descanso?',
    neutral:
      'Sei que o sono e o descanso estão diretamente relacionados com minha  capacidade de aprendizado, meu nível de ansiedade e meu equilíbrio físico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recuperação na maior parte do mês.',
    gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
  },
];

const thirdWheel = [
  {
    title: 'Expectativas de Carreira',
    subtitle: 'Com base no nível neutro, como você avalia o local em que você vive?',
    neutral:
      'Entendo a influência do lar sobre mim e considero que moro em  um ambiente com condições de higiene e privacidade onde posso descansar,  e me sinto seguro em relação às pessoas com quem convivo dentro de casa.',
    gif: 'https://giphy.com/gifs/boxycharm-OuMFETEGgiG6F2L3uO',
  },
  {
    title: 'Alimentação',
    subtitle: 'Com base no nível neutro, como você avalia a sua alimentação?',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
  },
  {
    title: 'Gestão de Rotina',
    subtitle: 'Com base no nível neutro, como você avalia sua gestão de rotina?',
    neutral:
      'Sei que existem mais oportunidades à minha disposição do que  tempo disponível, entendo o básico da minha hierarquia de necessidades e  tento aplicar o conceito de gestão de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha saúde ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
  },
  {
    title: 'Pertencimento',
    subtitle:
      'Com base no nível neutro, como você avalia a sua sensação de pertencimento no núcleo familiar?',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
  },
  {
    title: 'Descanso',
    subtitle: 'Com base no nível neutro, como você avalia a qualidade do seu descanso?',
    neutral:
      'Sei que o sono e o descanso estão diretamente relacionados com minha  capacidade de aprendizado, meu nível de ansiedade e meu equilíbrio físico e mental. Dessa forma, reservo e priorizo momentos de descanso e sono suficientes para minha recuperação na maior parte do mês.',
    gif: 'https://media.giphy.com/media/Jap1tdjahS0rm/giphy.gif',
  },
];
