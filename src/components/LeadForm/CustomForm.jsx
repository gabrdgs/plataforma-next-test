// Enviando...
// Email Cadastrado com Sucesso !
// Email Cadastrado com Sucesso !
import { Fragment } from 'react';
import { Col, Row, Space } from 'antd';

import styles from './CustomForm.module.scss';

import { ButtonModel } from '../ButtonModel';

export function CustomForm({ status, message, onValidated }) {
  let email, name;

  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  function createMarkup(message) {
    return { __html: message };
  }

  return (
    <div>
      <div
        style={{
          borderRadius: 2,
          padding: 10,
        }}
      >
        <Space direction="vertical" style={{ width: '100%' }} size={10}>
          {status !== 'success' && (
            <Fragment>
              {status === 'error' && (
                <div
                  className="alert error-message"
                  role="alert"
                  dangerouslySetInnerHTML={createMarkup(message)}
                />
              )}
              <Col>
                <Space direction="vertical" style={{ width: '100%' }} size={10}>
                  <Row span={15}>
                    <input
                      className={styles.CustomForm}
                      style={{
                        width: 550,
                        height: 50,
                        borderRadius: 5,
                        paddingLeft: 10,
                      }}
                      ref={(node) => (name = node)}
                      type="text"
                      placeholder="Nome"
                    />
                  </Row>
                  <Row>
                    <input
                      className={styles.CustomForm}
                      style={{
                        width: 550,
                        height: 50,
                        borderRadius: 5,
                        paddingLeft: 10,
                        fontSize: '1em',
                        padding: 10,
                      }}
                      ref={(node) => (email = node)}
                      type="email"
                      placeholder="Digite seu melhor email"
                    />
                  </Row>
                </Space>
              </Col>
            </Fragment>
          )}
          <Row justify="center">
            <ButtonModel
              width="large"
              height="large"
              color="primary"
              class={` submitButton ${status === 'success' ? 'submitButton--success' : ''}`}
              onClick={submit}
              hoverScale="true"
            >
              {status === 'sending' && 'Enviando...'}
              {status !== 'success' && status !== 'sending' ? 'Assinar' : message}
            </ButtonModel>
          </Row>
        </Space>
      </div>
    </div>
  );
}
