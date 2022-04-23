import React, { Fragment, useState, useEffect } from 'react';
import { Col, Row, Space } from 'antd';
import {
  RocketOutlined,
  LockFilled,
  UnlockFilled,
  CheckSquareFilled,
  Input,
} from '@ant-design/icons';
import { NavBarGeneral } from '../../../components/NavBarGeneral';
import { ContainerModel } from '../../../components/ContainerModel';
import { SocialMedia } from '../../../components/SocialMedia';


import WheelComponent from './WheelComponent';
import StepWelcome from './StepWelcome';

import Styles from './Mentor.module.scss';
import layout from '../../shared/Layout';

export default function Mentor() {
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
      title: 'Iniciar',
      disabled: false,
      icon: <UnlockFilled />,
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
    if (step - 1 < contentUpdated.length - 1) {
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
  ];

  return (
    <Fragment>
      <ContainerModel color="greyFive">
      <Space direction="vertical" size={contentIndex==0 ? layout.space.elements : 0 } style={{width:'100%'}}>
      <NavBarGeneral />
        {content[contentIndex]}
      <ContainerModel color="primary">
          <Row justify="center" style={{ padding: '20px 0' }}>
            <SocialMedia />
          </Row>
        </ContainerModel>
      </Space>
      </ContainerModel>
    </Fragment>
  );
}

const firstWheel = [
  {
    id: 'question0',
    title: 'Infos 📋',
    subtitle: 'Iremos precisar de algumas informações para registro do seu Assessment:',
    options: 'infos',
  },
  {
    id: 'question1',
    title: 'Características e Habilidades',
    subtitle: 'São características/ habilidades necessárias para ser um bom mentor:',
    neutral:
      'Entendo a influência do lar sobre mim e considero que moro em  um ambiente com condições de higiene e privacidade onde posso descansar,  e me sinto seguro em relação às pessoas com quem convivo dentro de casa.',
    gif: 'https://media.giphy.com/media/5xtDarqCp0eomZaFJW8/giphy.gif',
    options: [
      'Ser um bom ouvinte - Ser professor - Ter senso de autoridade- Ter disponibilidade de tempo e energia.',
      'Dizer sempre ao jovem o que ele deve fazer - Escolher as melhores oportunidades pelo jovem - Auxiliar o jovem financeiramente - Estabelecer uma relação de hierarquia com o jovem.',
      'Trabalhar em uma empresa - Ser empático - Ser um bom ouvinte - Ter disponibilidade de tempo e energia.',
      'Possuir boas experiências- Ser empático - Ser um bom ouvinte - Ter disponibilidade de tempo e energia.',
    ],
    rigthChoice: 2,
  },
  {
    id: 'question2',
    title: 'Deveres do Mentor',
    subtitle: 'São Deveres do mentor:',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/jKaFXbKyZFja0/giphy.gif',
    options: [
      'Deveres: 1. Oferecer suporte financeiro para o jovem 2. Ter disponibilidade e presença ao longo das sessões de mentoria 3.  Ter sempre respostas para o jovem sobre o que ele deve fazer.',
      'Deveres: 1. Oferecer suporte financeiro para o jovem 2. Ter disponibilidade e presença ao longo das sessões de mentoria 3. Participar dos encontros mensais, para troca de conhecimento e ferramentas que aprimoram seu papel como mentor.',
      'Deveres: 1. Acolher reduzir a ansiedade do jovem semente, quando necessário 2. Ter disponibilidade e presença ao longo das sessões de mentoria 3. Participar dos encontros mensais, para troca de conhecimento e ferramentas que aprimoram seu papel como mentor.',
    ],
    rigthChoice: 2,
  },
  {
    id: 'question3',
    title: 'Direitos do Mentor',
    subtitle: 'São Direitos do mentor:',
    neutral:
      'Sei que existem mais oportunidades à minha disposição do que  tempo disponível, entendo o básico da minha hierarquia de necessidades e  tento aplicar o conceito de gestão de agenda semanal e rotina, e, assim,  tenho tempo para honrar minimamente os compromissos que assumi, sem  prejudicar minha saúde ou relacionamentos.',
    gif: 'https://media.giphy.com/media/xTiTnxCaP0qE2XYalO/giphy.gif',
    options: [
      'Direitos: 1. Ter clareza sobre o papel esperado do Mentor 2. Receber suporte quando solicitado 3. Ser remunerado por seu trabalho.',
      'Direitos: 1. Mentorar sem dar feedbacks ao Instituto 2. Receber suporte quando solicitado 3. Ser remunerado por seu trabalho.',
      'Direitos: 1. Ter clareza sobre o papel esperado do Mentor 2. Receber suporte quando solicitado 3. Ter a oportunidade de gerar mudança e exercer cidadania.',
    ],
    rigthChoice: 2,
  },
  {
    id: 'question4',
    title: 'Metodologia da Mentoria',
    subtitle: 'Sobre a estrutura metodológica da mentoria é correto afirmar:',
    neutral:
      'Sei a importância de uma boa alimentação como fonte de  energia para o melhor funcionamento do meu corpo e mente. Com os recursos  que tenho, faço refeições de qualidade nutricional suficiente.',
    gif: 'https://media.giphy.com/media/xT5LMXR7iA0mSSxOBG/giphy.gif',
    options: [
      'A mentoria é baseada na estrutura formulada pelo atual Diretor Executivo do Instituto. Essa estrutura tem como visão atender as necessidades básicas dos jovens e desenvolve-los,  a fim de que eles sejam empreendedores de sucesso.',
      'A mentoria não é baseada em uma teoria específica, ela é na verdade personalizada conforme as necessidades de cada jovem em particular.',
      'A mentoria é baseada na teoria das necessidades humanas de Maslow , que diz que as necessidades humanas possuem uma hierarquia, de forma que as necessidades mais básicas precisam ser solucionadas antes.',
    ],
    rigthChoice: 2,
  },
];
