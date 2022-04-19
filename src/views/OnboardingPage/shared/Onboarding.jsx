import React, { Fragment, useState } from 'react';

import { Presentation } from '../shared';
import { MentoringProgram } from '../shared';
import { ParagraphModel } from '../../../components/ParagraphModel';

const contentSeed = {
  introduction: (
    <ParagraphModel size="large" color="primaryLight">
      Te convidamos a conhecer melhor o <strong>Programa de Mentoria Social</strong> e
      <strong> seu papel como mentorado(a)</strong> pelo vídeo feito especialmente para você!
    </ParagraphModel>
  ),
  assessment: (
    <ParagraphModel>
      Ao iniciar o programa, você realizará um auto diagnóstico, chamado assessment. Neste
      diagnóstico,
      <strong>você deve classificar as diversas áreas de sua vida com notas indo de 1 a 10</strong>,
      baseadas em parâmetros estabelecidos pelo Semear, gerando, ao final, as 3 Rodas da trilha
      acerca dos eixos mais comuns de desafios. Isto é feito para podermos entender quais áreas
      estão sendo um freio ou uma alavanca em sua jornada de desenvolvimento.
      <strong> Estabelecemos que a nota 7 é um nível neutro</strong>, ou seja, esta área não é um
      freio e nem uma alavanca para que você alcance seus objetivos.
    </ParagraphModel>
  ),
  goal: (
    <ParagraphModel>
      Agora que já falamos sobre a mentoria do Semear, iremos conversar um pouco sobre o seu papel
      neste sistema. Você e o mentor poderão trabalhar os pontos de melhoria dos desafios
      enfrentados por você. Esperamos que o mentor o faça refletir, o ajude a encontrar soluções,
      estabelecer metas e o ajude a estruturar planos de ação para que você se desenvolva e suas
      notas aumentem e cheguem, pelo menos, ao nível neutro, ou seja, nota 7.
    </ParagraphModel>
  ),
  nextSteps: (
    <ParagraphModel>
      <strong>
        Você irá preencher um diagnóstico de mentoria, o qual utilizamos para te conhecer um
        pouquinho mais
      </strong>{' '}
      e proporcionarmos o melhor match possível com um mentor!
    </ParagraphModel>
  ),
};

const contentMentor = {
  introduction: (
    <ParagraphModel size="large" color="primaryLight">
      Te convidamos a conhecer melhor o <strong>Programa de Mentoria Social</strong> e
      <strong> seu papel como mentor(a)</strong> pelo vídeo feito especialmente para você!
    </ParagraphModel>
  ),
  assessment: (
    <ParagraphModel>
      Ao iniciar o programa, o seu mentorado responde um diagnóstico, chamado assessment. Neste
      formulário,
      <strong>o jovem classifica as diversas áreas de sua vida com notas indo de 1 a 10, </strong>
      baseadas em parâmetros estabelecidos pelo Semear, gerando, ao final, as 3 Rodas da trilha
      acerca dos eixos mais comuns de desafios. Isto é feito para podermos entender quais áreas da
      vida deste jovem estão sendo um freio ou uma alavanca em sua jornada de desenvolvimento.
      <strong> Estabelecemos que a nota 7 é um nível neutro</strong>, ou seja, esta área não é um
      freio e nem uma alavanca na vida do jovem.
    </ParagraphModel>
  ),
  goal: (
    <ParagraphModel>
      Agora que já falamos sobre a mentoria do Semear, iremos conversar um pouco sobre o seu papel
      neste sistema. Você e o jovem poderão trabalhar os pontos de melhoria dos desafios enfrentados
      por ele. Esperamos que você o faça refletir, o ajude a encontrar soluções, estabelecer metas e
      o ajude a estruturar planos de ação para que esse jovem se desenvolva e suas notas aumentem e
      cheguem, pelo menos, ao nível neutro, ou seja, nota 7.
    </ParagraphModel>
  ),
  nextSteps: (
    <ParagraphModel>
      <strong>
        Você irá preencher um diagnóstico de mentoria, o qual utilizamos para te conhecer um
        pouquinho mais
      </strong>{' '}
      e proporcionarmos o melhor match possível com um jovem!
    </ParagraphModel>
  ),
};


export default function Onboarding({ user }) {
  const [step, setStep] = useState(0);
  const handleClick = (value) => {
      setStep(value)
  }
  const content = user === "seed" ? contentSeed : contentMentor;

  return (
    <Fragment>
      {step === 0 ? (
        <Presentation onClick={handleClick} />
      ) : (
        <MentoringProgram content={content} onClick={handleClick} user={user}/>
      )}
    </Fragment>
  );
}
