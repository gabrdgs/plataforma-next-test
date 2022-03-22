import {useState} from 'react';
import Image from 'next/image';
import { Button, Col, Row, Typography, Input, Form, Modal, Space, Breadcrumb, Checkbox, InputNumber } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import styles from './SubmitButton.module.scss';


import { Section } from '../../../components/Section';
import {ButtonModel} from '../../../components/ButtonModel';

import videoBackgroundImage from '../../../assets/images/landingPage/instituto-semear.png'

const { Title, Text } = Typography;


export default function Login ({ 
  id, 
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
        <ButtonModel width="full" height="large" color="default" type="primary" onClick={showModal}>Inscreva-se</ButtonModel>
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
                                label="Senha"
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



  
    