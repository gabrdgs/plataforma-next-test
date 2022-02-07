import React, {Fragment, useState} from 'react'
import {Col, Row, Input, Rate, Steps} from 'antd'
import {FrownOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

const {TextArea} = Input
const {Step} = Steps

const PositiveStep = (props) => {
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
export default PositiveStep

function StepOne() {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  }
  return (
    <Fragment>
      <Col span={20} offset={2}>
        <h1> Feedback </h1>
        <h5 style={{margin: '20px 0'}}> Como foi a mentoria para você? </h5>
        <Row justify="center">
          <Rate
            align="center"
            style={{transform: 'scale(2)', marginBottom: '60px'}}
            defaultValue={3}
            character={({index}) => customIcons[index + 1]}
          />
        </Row>
        <h5>
          Este espaço é para você nos contar um pouco mais da sua experiência
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
        <h1 style={{margin: '20px 0'}}> Obrigada! </h1>
      </Col>
    </Fragment>
  )
}
