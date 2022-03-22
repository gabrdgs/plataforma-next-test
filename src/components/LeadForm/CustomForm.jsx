// Enviando...
// Email Cadastrado com Sucesso !
// Email Cadastrado com Sucesso !
import {Fragment} from 'react'
import { Col, Row, Input, Form, Space } from 'antd';
import Image from 'next/image';

import styles from './CustomForm.module.scss';

import {ButtonModel} from '../ButtonModel'


export function CustomForm({status, message, onValidated}) {
  let email, name

  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    })

  function createMarkup(message) {
    return {__html: message}
  }

  return (
    <div className="">
      <div
        className=""
        style={{
          borderRadius: 2,
          padding: 10,
        }}
      >
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
              <Row span={15}>
                <input 
                className={styles.CustomForm}
                style={{
                  width: 550,
                  height: 50,
                  borderRadius:5,
                  paddingLeft:10,
                }}
                ref={(node) => (name = node)}
                type="text"
                placeholder="Nome"
                />
              </Row>
              <br/>
              <Row>
                  <input
                  className= {styles.CustomForm}
                  style={{
                    width: 550,
                    height: 50,
                    borderRadius:5,
                    paddingLeft:10,
                    fontSize: '1em',
                    padding: 10
                  }}
                  ref={(node) => (email = node)}
                  type="email"
                  placeholder="Digite seu melhor email"
                  />
              </Row>
            </Col>
          </Fragment>
        )}
        <br/>
        <ButtonModel
          width="large"
          height = "large"
          color='primary'
          class={` submitButton ${
            status === 'success' ? 'submitButton--success' : ''
          }`}
          onClick={submit}
          hoverScale="true"
        >
          {status === 'sending' && 'Enviando...'}
          {status !== 'success' && status !== 'sending'
            ? 'Assinar'
            : message}
        </ButtonModel>
      </div>
    </div>
  )
}
