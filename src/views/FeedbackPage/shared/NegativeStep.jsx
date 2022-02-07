import React, {Fragment, useState} from 'react'
import {Col, Checkbox, Input, Radio, Space, Steps} from 'antd'
import {FrownOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

const {TextArea} = Input
const {Step} = Steps

const NegativeStep = (props) => {
  const steps = [{content: <StepOne />}, {content: <StepTwo />}]
  return (
    <Fragment>
      {props.current <= steps.length && (
        <div>
          <Steps
            current={props.current - 1}
            style={{width: '80%', margin: '0 auto 20px auto'}}
            justify="center"
            align="middle"
          >
            {steps.map((item, index) => (
              <Step key={`step-${index}`} />
            ))}
          </Steps>
          <div className="steps-content">
            {steps[props.current - 1].content}
          </div>
        </div>
      )}
    </Fragment>
  )
}
export default NegativeStep

const StepOne = () => {
  const [value, setValue] = useState(0)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Fragment>
      <Col span={20} offset={2}>
        <h1 style={{marginBottom: '20px'}}>
          Sentimos muito <FrownOutlined />
        </h1>
        <h5 style={{marginTop: '40px'}}>Porque a mentoria não aconteceu?</h5>
        <Radio.Group
          value={value}
          onChange={onChange}
          style={{
            transform: 'scale(1.2)',
            paddingLeft: '40px',
            paddingTop: '15px',
          }}
        >
          <Space direction="vertical">
            <Radio value={1}>
              Não pude realizar a mentoria devido a falta de disponibilidade
            </Radio>
            <Radio value={2}>
              Tive problemas para me comunicar com o mentor
            </Radio>
            <Radio value={3}>Marquei o encontro e o mentor não apareceu</Radio>

            <Radio value={4}>Entrei em contato e o mentor não respondeu</Radio>
            <Radio value={5}>
              Outro
              {value === 5 ? (
                <Input style={{width: 300, marginLeft: 10}} />
              ) : null}
            </Radio>
          </Space>
        </Radio.Group>
        <h5 style={{marginTop: '40px'}}>
          Deseja contar um pouco mais sobre a sua experiência?
        </h5>
        <TextArea rows={4} />
      </Col>
    </Fragment>
  )
}

function StepTwo() {
  return (
    <Fragment>
      <Col span={20} offset={2}>
        <h1> Feedback </h1>
        <h5 style={{margin: '20px 0'}}> Até a Próxima </h5>
      </Col>
    </Fragment>
  )
}