import { Col, Input, Form, Space } from 'antd';
import Image from 'next/image';


import { Section } from '../../../components/Section';
import { Heading } from '../../../components/Heading';
import { ButtonModel } from '../../../components/ButtonModel';
import { Paragraph } from '../../../components/Paragraph';
import { LeadForm } from '../../../components/LeadForm'
import {SocialMedia} from '../../../components/SocialMedia'
import {Logo} from '../../../components/Logo'


const layout = {
    labelCol: { span: 20 },
    wrapperCol: { span: 10 },
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
                <Heading alignment="center" level={3} color="secondary">Gostou da nossa proposta ?</Heading>
                <Paragraph alignment="center" color="secondary">Estamos trabalhando para trazer para vocês a melhor e mais amada plataforma de mentoria do Brasil, se você tem interesse em ser jovem ou mentor, assine nossa newsletter e receba todas as novidades e atualizações sobre o funcionamento da nossa plataforma.</Paragraph>    
                    <br></br>
                <LeadForm/>
             
            </Col>
            <br></br>
            <Col span={15} offset={10}>
                <SocialMedia/>
            </Col>
        </Section>

    )
}