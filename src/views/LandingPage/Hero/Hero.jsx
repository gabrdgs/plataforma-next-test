// import styles from './Hero.module.scss';
import {useState} from 'react';
import { Button, Col, Row, Typography, Modal, Breadcrumb, Form, Input, Checkbox } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

import { Section } from '../../../components/Section';
import { Container } from '../../../components/Container';
import {Wave} from '../../../components/Wave'


import heroImage from '../../../assets/images/characters/header.png';

import styles from './Hero.module.scss';
import { Heading } from '../../../components/Heading';
import { Paragraph } from '../../../components/Paragraph';
import { ButtonModel } from '../../../components/ButtonModel';
import { Fragment } from 'react';

function Hero({ id }) {
  return (
    <Fragment>
    <Section id={id} bgColor="primary">
      <Container color='primary'>
        <Row gutter={[48, 48]}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Heading level ={1} color="quinary">As conexões que mudarão o seu futuro!</Heading>

            <Paragraph weight='default' color='secondary'>
              A plataforma desenvolvida para mentores e jovens universitários protagonistas que
              juntos buscam aprimorar suas habilidades profissionais e alcançar seus sonhos.
            </Paragraph>

            <Heading level={4} color="secondary">
              As conexões que mudarão o seu futuro!
            </Heading>

            <SubmitButton align='start'/>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <div className={styles.Hero__Image}>
              <Image src={heroImage} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
    <Wave direction="up" innerColor = '#11115d' outsideColor = '#fff'/>
    </Fragment>
  );
}

export default Hero;

function SubmitButton ({ 
  align = 'center',
 }){
      

    const [screen, setScreen] = useState(1)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
    setIsModalVisible(true);
    };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };


    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    return(
        <div data-align={align}>
        <ButtonModel width="default" align="start" height="default" color="default" type="primary" onClick={showModal}>Inscreva-se</ButtonModel>
        <Modal 
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel} 
          width={800} 
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk} href='/register'>
              Enviar
            </Button>,
          ]}>
            <Breadcrumb style={{margin: '20px 0 0px 50px'}}>
                <Breadcrumb.Item>
                  <a>Inscreva-se</a>
                </Breadcrumb.Item>
                </Breadcrumb>
                        <div>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                            >
                              <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Por favor, indique seu email!' }]}
                              >
                                <Input />
                              </Form.Item>
                                                
                              <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Por favor, indique sua senha!' }]}
                              >
                                <Input.Password />
                              </Form.Item>
                                                
                              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Lembrar-se de mim</Checkbox>
                              </Form.Item>
                            </Form>
            </div>
          </Modal>
        </div>
    )
}

