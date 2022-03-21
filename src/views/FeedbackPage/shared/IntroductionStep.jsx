import React, {Fragment, useState} from 'react'
import {Button, Col, Row, Checkbox, Space} from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';

const CheckboxGroup = Checkbox.Group

const IntroductionStep = (props) => {
    const [editClicked, setEditClicked] = useState(false)

  return (
    <Fragment>
      <Heading alignment="center">Feedback</Heading>
      <Space direction="vertical" size={15} style={{ width: '100%' }}>
        <Paragraph alignment="center">
          Esta página é a garantia da qualidade da sua sessão de mentoria!
        </Paragraph>
        <Paragraph size="large" strong alignment="center">
          Sua sessão de mentoria com {props.name} aconteceu?
        </Paragraph>
        <Row align="middle" justify="center">
          <Col>
            <CheckboxGroup
              style={{ transform: 'scale(2)' }}
              options={props.options}
              onChange={props.onChange}
              value={props.isChecked.toString()}
              disabled={props.isChecked.length > 0 ? true : false}
            />
          </Col>
          <Col offset={2}>
            <Button
              onClick={() => {
                setEditClicked(true);
                props.onChange([]);
              }}
              disabled={props.isChecked.length > 0 ? false : true}
            >
              Editar <EditOutlined />
            </Button>
          </Col>
        </Row>
      </Space>
    </Fragment>
  );
}
export default IntroductionStep
