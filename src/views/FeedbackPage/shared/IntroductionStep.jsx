import React, {Fragment, useState} from 'react'
import {Button, Col, Row, Checkbox} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

const CheckboxGroup = Checkbox.Group

const IntroductionStep = (props) => {
    const [editClicked, setEditClicked] = useState(false)

  return (
    <Fragment>
      <h1 align="center" className="my-5">
        Lista de Presença
      </h1>
      <h6 align="center" className="my-5">
        Esta página é a garantia da qualidade da sua sessão de mentoria!
      </h6>
      <h3 align="center" className="my-5">
        Sua sessão de mentoria com {props.name} aconteceu?
      </h3>
      <Row align="middle" justify="center">
        <Col>
          <CheckboxGroup
            style={{transform: 'scale(2)'}}
            options={props.options}
            onChange={props.onChange}
            value={props.isChecked.toString()}
            disabled={props.isChecked.length > 0 ? true : false}
          />
        </Col>
        <Col offset={2}>
          <Button
            onClick={() => {
              setEditClicked(true)
              props.onChange([])
            }}
            disabled={props.isChecked.length > 0 ? false : true}
          >
            Editar <EditOutlined />
          </Button>
        </Col>
      </Row>
    </Fragment>
  )
}
export default IntroductionStep
