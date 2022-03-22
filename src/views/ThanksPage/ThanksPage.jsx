import React, { Fragment } from 'react';
import Image from 'next/image';
import { Col, Row } from 'antd';

import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import { Paragraph } from '../../components/Paragraph';
import { CardModel } from '../../components/CardModel';

import Styles from './ThanksPage.module.scss'

import SemearImage from '../../assets/images/objects/notebook.jpeg'

export default function ThanksPage() {
    return (
      <Fragment>
        <Section bgColor="blue">
            <CardModel width='large'>
                <Row align='middle'>
                    <Col span={15} offset={1}>
                        <br></br>
                        <br></br>
                        <Heading color='quartenary'>Muito obrigada pelo seu tempo e por sua atenção 🧡💚</Heading>
                        <Paragraph>Agora vamos para as nossa perguntinhas 🌱</Paragraph>
                    </Col>
                    <Col span={6} offset={1}>
                        <br></br>
                        <br></br>
                        <Image src={SemearImage} width={180} height={200}/>
                    </Col>
                </Row>
            </CardModel>
        </Section>
      </Fragment>
    )
}