import {useState} from 'react';
import Image from 'next/image';
import { Button, Col, Row, Typography, Input, Form, Modal, Space, Breadcrumb, Checkbox, InputNumber } from 'antd';
import { LoginOutlined } from '@ant-design/icons';


import { Section } from '../../../components/Section';
import {ButtonModel} from '../../../components/ButtonModel';

import videoBackgroundImage from '../../../assets/images/landingPage/instituto-semear.png'

const { Title, Text } = Typography;


export default function Login ({ id }){
      

    const [screen, setScreen] = useState(1)

    const onClickAll = () => {
        setScreen(1)
    }

    const onClickAccepted = () => {
        setScreen(2)
    }


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
        <Row align="middle" justify="space-around">
        <ButtonModel width="small" height="small" color="primary" type="primary" onClick={showModal}><LoginOutlined/>Entrar</ButtonModel>
        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800}>
            <Breadcrumb style={{margin: '20px 0 0px 50px'}}>
                <Breadcrumb.Item onClick={onClickAll}>
                  <a>Login</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item onClick={onClickAccepted}>
                  <a>Cadastro</a>
                </Breadcrumb.Item>
                </Breadcrumb>
                    {screen == 1 ? (
                        <div>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                            >
                              <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                              >
                                <Input />
                              </Form.Item>
                                                
                              <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                              >
                                <Input.Password />
                              </Form.Item>
                                                
                              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                <Checkbox>Remember me</Checkbox>
                              </Form.Item>
                                                
                              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit">
                                  Submit
                                </Button>
                              </Form.Item>
                            </Form>

            </div>
            ) : (
            <div>
                 <Form name="nest-messages"  validateMessages={validateMessages}>
              <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
              </Form.Item>
            </Form>
            </div>
        )}
        </Modal>
        </Row>
    )
}



  
    