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
        <ButtonModel href='/register' width="small" height="small" color="primary" type="primary"><LoginOutlined/>Entrar</ButtonModel>
        </Row>
    )
}



  
    