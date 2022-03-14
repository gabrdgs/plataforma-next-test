import React, { Fragment, useState } from 'react';
import { Steps, Button, message, Col, Row, Space } from 'antd';

import StepAssessment from './StepAssessment';

const { Step } = Steps;

const contentAssessment = [
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

const FirstWheel = (props) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: contentAssessment[0].title,
      content: <StepAssessment content={contentAssessment[0]} />,
    },
    {
      title: contentAssessment[1].title,
      content: <StepAssessment content={contentAssessment[1]} />,
    },
    {
      title: contentAssessment[2].title,
      content: <StepAssessment content={contentAssessment[2]} />,
    },
    {
      title: contentAssessment[3].title,
      content: <StepAssessment content={contentAssessment[3]} />,
    },
    {
      title: contentAssessment[4].title,
      content: <StepAssessment content={contentAssessment[4]} />,
    },
    {
      title: contentAssessment[5].title,
      content: <StepAssessment content={contentAssessment[5]} />,
    },
  ];

  return (
    <Fragment>
      <Row align="middle" justify="center">
        <Col xs={{ span: 1 }} sm={{ span: 6 }} md={{ span: 6 }} xl={{ span: 4 }}>
          <Steps current={current} size="small" direction="vertical">
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </Col>
        <Col offset={1} xs={{ span: 20 }} sm={{ span: 16 }}>
          <div className="steps-content">{steps[current].content}</div>
        </Col>
      </Row>
      <div className="steps-buttons">
        <Row justify="end" align="middle">
          <Space size={5}>
            {current < contentAssessment.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Próximo
              </Button>
            )}
            {current > 0 && <Button onClick={() => prev()}>Anterior</Button>}
            {current === contentAssessment.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  message.success('Etapa 1 concluída com sucesso!');
                  props.onClick(0);
                }}
              >
                Enviar
              </Button>
            )}
          </Space>
        </Row>
      </div>
    </Fragment>
  );
};
export default FirstWheel;
