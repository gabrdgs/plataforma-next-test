import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import {Select, Form, Input, Radio, Space, Checkbox} from 'antd'
import 'antd/dist/antd.css'

import plataformaLogo from '../../../assets/images/brands/logo-semear.png';

const {Option} = Select

const questionsOfRadio = [
  {
    label:
      'São características e/ou habilidades necessárias para ser um bom mentor:',
    options: [
      'Ser um bom ouvinte - Ser professor - Ter senso de autoridade- Ter disponibilidade de tempo e energia.',
      'Dizer sempre ao jovem o que ele deve fazer - Escolher as melhores oportunidades pelo jovem - Auxiliar o jovem financeiramente - Estabelecer uma relação de hierarquia com o jovem.',
      'Trabalhar em uma empresa - Ser empático - Ser um bom ouvinte - Ter disponibilidade de tempo e energia.',
      'Possuir boas experiências- Ser empático - Ser um bom ouvinte - Ter disponibilidade de tempo e energia.',
    ],
    rigthChoice: 2,
  },
  {
    label: 'São direitos do mentor:',
    options: [
      'Direitos: 1. Ter clareza sobre o papel esperado do Mentor 2. Receber suporte quando solicitado 3. Ser remunerado por seu trabalho.',
      'Direitos: 1. Mentorar sem dar feedbacks ao Instituto 2. Receber suporte quando solicitado 3. Ser remunerado por seu trabalho.',
      'Direitos: 1. Ter clareza sobre o papel esperado do Mentor 2. Receber suporte quando solicitado 3. Ter a oportunidade de gerar mudança e exercer cidadania.',
    ],
    rigthChoice: 2,
  },
  {
    label: 'São deveres do mentor:',
    options: [
      'Deveres:  1. Oferecer suporte financeiro para o jovem 2. Ter disponibilidade e presença ao longo das sessões de mentoria 3.  Ter sempre respostas para o jovem sobre o que ele deve fazer.',
      'Deveres: 1. Oferecer suporte financeiro para o jovem 2. Ter disponibilidade e presença ao longo das sessões de mentoria 3. Participar dos encontros mensais, para troca de conhecimento e ferramentas que aprimoram seu papel como mentor.',
      'Deveres: 1. Acolher reduzir a ansiedade do jovem semente, quando necessário 2. Ter disponibilidade e presença ao longo das sessões de mentoria 3. Participar dos encontros mensais, para troca de conhecimento e ferramentas que aprimoram seu papel como mentor.',
    ],
    rigthChoice: 2,
  },
  {
    label: 'Sobre a estrutura metodológica da mentoria é correto afirmar:',
    options: [
      'A mentoria é baseada na estrutura formulada pelo atual Diretor Executivo do Instituto. Essa estrutura tem como visão atender as necessidades básicas dos jovens e desenvolve-los,  a fim de que eles sejam empreendedores de sucesso.',
      'A mentoria não é baseada em uma teoria específica, ela é na verdade personalizada conforme as necessidades de cada jovem em particular.',
      'A mentoria é baseada na teoria das necessidades humanas de Maslow , que diz que as necessidades humanas possuem uma hierarquia, de forma que as necessidades mais básicas precisam ser solucionadas antes.',
    ],
    rigthChoice: 2,
  },
]

const questionsOfCheckBox = [
  {
    label:
      'Conduzir o jovem na jornada de autoconhecimento, ampliando seus horizontes e referências, servindo como um parceiro na tomada de decisões sobre sua trajetória.',
    options: [
      'Mentoria Alicerce',
      'Mentoria Propósito',
      'Mentoria Profissional',
    ],
    rigthChoice: 2,
  },
  {
    label:
      'Alinhar as expectativas e alavancar o início de carreira do jovem balizando suas competências e interesses, ampliando seu capital social e cultural.',
    options: [
      'Mentoria Alicerce',
      'Mentoria Propósito',
      'Mentoria Profissional',
    ],
    rigthChoice: 2,
  },
  {
    label:
      'Auxiliar na definição de prioridades e consequente alocação de tempo e energia, apoiando o gerenciamento de ansiedade e stress do primeiro ano. Fortalecer a autoestima do jovem, acolhendo e criando um senso de pertencimento sempre que possível.',
    options: [
      'Mentoria Alicerce',
      'Mentoria Propósito',
      'Mentoria Profissional',
    ],
    rigthChoice: 2,
  },
]

const StepChannel = (props) => {
  const [firstValue, setFirst] = useState(0)
  const [checkedList, setCheckedList] = useState([])
  const [course, setCourse] = useState('')
  const [company, setCompany] = useState('')
  const [area, setArea] = useState('')
  const [subarea, setSubarea] = useState([])

  const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  }

  const onChange = (event) => {
    setFirst(event.target.value)
  }

  const onChangeCheckbox = (value) => {
    setCheckedList(value)
  }

  return (
    <Fragment>
      <div align="center">
        <Image src={plataformaLogo} width={90} height={90} />
      </div>
      <h4 align="center">Teste de Canal 📋</h4>

      <Space direction="vertical" size={[40, 40]}>
        {questionsOfRadio.map((item, index) => (
          <div>
            <h6>{item.label}</h6>
            <Radio.Group
              onChange={onChange}
              value={firstValue}
              key={`q-${index}`}
            >
              <Space direction="vertical">
                {item.options.map((optionValue, indexOption) => (
                  <Radio value={indexOption + 1} key={`o-${indexOption}`}>
                    {optionValue}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>
        ))}
      </Space>

      <div style={{marginTop: '40px'}}>
        <Space direction="vertical" size={20}>
          <h6>
            Sobre os tipos de mentoria (eixo momento de vida) assinale a
            correspondência entre mentoria e seu respectivo conceito
          </h6>
        </Space>
      </div>

      <Space direction="vertical" size={30}>
        {questionsOfCheckBox.map((item, index) => (
          <div>
            <label>{item.label}</label>
            <Checkbox.Group
              options={item.options}
              value={checkedList}
              onChange={onChangeCheckbox}
              key={`q-${index}`}
            />
          </div>
        ))}
      </Space>
      <Form.Item style={{marginTop: '40px'}}>
        <h6>
          Use esse espaço para comentários, dúvidas, e feedbacks a respeito dos
          conteúdos de formação
        </h6>
        <Input.TextArea
          showSearch
          placeholder="Espaço para comentários, sugestões e dúvidas"
          optionFilterProp="children"
          style={{width: '100%'}}
          rows={4}
        />
      </Form.Item>
    </Fragment>
  )
}

export default StepChannel
