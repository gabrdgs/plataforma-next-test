import React, {Fragment, useState} from 'react'
import Image from 'next/image'
import {Select, Form, Input, Radio, Space, Checkbox, Row} from 'antd'
import 'antd/dist/antd.css'

import plataformaLogo from '../../../assets/images/brands/logo-semear.png';

const {Option} = Select

const questionsOfRadio = [
  {
    label: 'Qual formato de mentoria você se identifica mais?',
    options: ['Individual', 'Em Grupo', 'Individual e em Grupo'],
    rigthChoice: 2,
  },
  {
    label:
      'Levando em conta que para cada mentoria deve-se reservar 2h de disponibilidade, quantas mentorias você disponibilizará durante o Programa de Carreiras?',
    options: ['1 (2h)', '2 (4h)', '3 (6h)', '4 (8h)', '5 (10h)'],
    rigthChoice: 2,
  },
]

const questionsOfAssessment = {
  text: 'Dado a definição dos desafios contidos na Metodologia Semear, classifique seu nível de domínio em relação à: ',
  label: [
    'Moradia',
    'Alimentação',
    'Descanso',
    'Atividade Física',
    'Gestão de Rotina',
    'Pertencimento',
    'Autoestima',
    'Fit Carreira x Fit Tempo',
    'Autoliderança',
    'Expectativas de Carreira',
    'Sonhar Grande',
    'Feedbacks',
    'Capital Cultural',
    'Ciclos de Carreira',
    'Expedição de Carreira',
    'Régua do Mercado',
  ],
  options: ['Muito Ruim', 'Ruim', 'Razoável', 'Bom', 'Muito Bom'],
}

const questionsOfCheckBox = [
  {
    label:
      'Sobre os tipos de mentoria (eixo momento de vida), nos conte qual mentoria você apresentaria mais interesse em participar',
    options: [
      'Mentoria Alicerce',
      'Mentoria Propósito',
      'Mentoria Profissional',
    ],
  },
]

const StepProfile = (props) => {
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
      <h4 align="center">Perfil 📋</h4>
      <div style={{marginTop: '40px'}}>
        <Space direction="vertical" size={[40, 40]}>
          {questionsOfRadio.map((item, index) => (
            <div>
              <h6>{item.label}</h6>
              <Radio.Group
                onChange={onChange}
                name="radiogroup"
                value={firstValue}
                key={`q-${index}`}
              >
                <Space direction="horizontal" size={10}>
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
      </div>
      <div style={{marginTop: '40px'}}>
        <Space direction="vertical" size={40}>
          {questionsOfCheckBox.map((item, index) => (
            <div>
              <h6>{item.label}</h6>
              <Checkbox.Group
                options={item.options}
                value={checkedList}
                onChange={onChangeCheckbox}
                key={`q-${index}`}
              />
            </div>
          ))}
        </Space>
      </div>
      <div style={{marginTop: '40px'}}>
        <h6> {questionsOfAssessment.text} </h6>
        <Space direction="vertical" size={[40, 40]}>
          {questionsOfAssessment.label.map((item, index) => (
            <div>
              <h6>{item}</h6>
              <Radio.Group
                onChange={onChange}
                name="radiogroup"
                value={firstValue}
                key={`q-${index}`}
              >
                <Space direction="horizontal" size={10}>
                  {questionsOfAssessment.options.map(
                    (optionValue, indexOption) => (
                      <Radio value={indexOption + 1} key={`o-${indexOption}`}>
                        {optionValue}
                      </Radio>
                    ),
                  )}
                </Space>
              </Radio.Group>
            </div>
          ))}
        </Space>
      </div>
    </Fragment>
  )
}

export default StepProfile
