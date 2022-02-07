import { Col, Row, Typography, Input, Form, Space } from 'antd';
import Image from 'next/image';

import { Section } from '../../../components/Section';
import { Heading } from '../../../components/Heading';
import { ButtonModel } from '../../../components/ButtonModel';
import { Paragraph } from '../../../components/Paragraph';
import {SocialMedia} from '../../../components/SocialMedia'
import {Logo} from '../../../components/Logo'


const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 25 },
  };
  
  
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} Não é um email valido!',
    },
}

    const onFinish = (values= any) => {
      console.log(values);
    };


export default function Footer ({ id }){
    return(
        <Section bgColor="dark">
            <Col span={10} offset={7}>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} justify="space-around">
                    <Heading alignment="center" level={3} color="secondary">Gostou da nossa proposta ?</Heading>
                    <Paragraph alignment="center" color="secondary">Estamos trabalhando para trazer para vocês a melhor e mais amada plataforma de mentoria do Brasil, se você tem interesse em ser jovem ou mentor, assine nossa newsletter e receba todas as novidades e atualizações sobre o funcionamento da nossa plataforma.</Paragraph>
                    <Form.Item name={['user', 'name']}  rules={[{ required: true }]}>
                        <Input placeholder="Digite seu Nome"/>
                    </Form.Item>
                    <Form.Item name={['user', 'email']}  rules={[{ type: 'email' }]}>
                        <Input placeholder="Digite seu Email"/>
                    </Form.Item>
                    <Form.Item>
                    <ButtonModel color="default" width='full' height='large'>Enviar</ButtonModel>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={10} offset={10}>
                <SocialMedia/>
            </Col>
        </Section>

    )
}