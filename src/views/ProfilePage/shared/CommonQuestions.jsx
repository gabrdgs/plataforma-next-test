import React from 'react';
import { Modal, Collapse, Button } from 'antd';
import { Heading } from '../../../components/Heading';

const { Panel } = Collapse;

export default function CommonQuestions(props) {
  return (
    <Modal
      visible={props.isModalVisible}
      centered={true}
      onCancel={props.handleCancel}
      footer={[
        <Button
          type="primary"
          key="confirm"
          onClick={props.handleCancel}
          style={{ marginTop: '10px' }}
        >
          OK
        </Button>,
      ]}
    >
      <Heading>FAQ | Perguntas Frequentes</Heading>
      <Collapse accordion>
        {props.questionsList.map((item, index) => (
          <Panel header={item.header} key={`question-${index+1}`}>
            <p>{item.text}</p>
          </Panel>
        ))}
      </Collapse>
    </Modal>
  );
}
