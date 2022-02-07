import React, {Fragment, useState, useEffect} from 'react'
import Image from 'next/image'
import {Select, Form} from 'antd'
import 'antd/dist/antd.css'
import { Paragraph } from '../../../components/Paragraph';

import areasList from '../shared/AreasList';
import SubareasList from '../shared/SubareasList';
import coursesList from '../shared/CoursesList';
import universitiesList from '../shared/UniversitiesList';

import plataformaLogo from '../../../assets/images/brands/logo-semear.png';
import { Heading } from '../../../components/Heading';

const {Option} = Select

const StepInfos = (props) => {
  const [college, setCollege] = useState('')
  const [course, setCourse] = useState('')
  const [area, setArea] = useState('')
  const [subarea, setSubarea] = useState([])

  const onChangeCollege = (value) => {
    setCollege(value)
  }
  const onChangeCourse = (value) => {
    setCourse(value)
  }
  const onChangeArea = (value) => {
    setArea(value)
  }
  const onChangeSubarea = (value) => {
    setSubarea(value)
  }

  useEffect(() => {
    props.onChange(!(!college || !course || !area || subarea.length === 0))
  })

  const layout = {
    labelCol: {span: 6},
    wrapperCol: {span: 16},
  }

  return (
    <Fragment>
      <div align="center">
        <Image src={plataformaLogo} width={90} height={90} />
      </div>
      <Heading level={4} alignment="center">Infos Acadêmicas e Profissionais 📋</Heading>
      <Form.Item
        label={<Paragraph size='small' color='default'>Faculdade</Paragraph>}
        name="college"
        {...layout}
        rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
      >
        <Select
          showSearch
          placeholder="Qual sua instituição de ensino?"
          optionFilterProp="children"
          onChange={onChangeCollege}
          style={{ width: '100%' }}
        >
          {universitiesList.map((item, index) => (
            <Option value={item.faculdade} key={index}>
              <Paragraph size='small' color='default'>{item.faculdade}</Paragraph>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={<Paragraph size='small' color='default'>Curso</Paragraph>}
        name="course"
        rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
        {...layout}
      >
        <Select
          showSearch
          placeholder="Qual seu curso?"
          optionFilterProp="children"
          onChange={onChangeCourse}
          style={{ width: '100%' }}
        >
          {coursesList.map((item, index) => (
            <Option value={item.curso} key={index}>
              <Paragraph size='small' color='default'>{item.curso}</Paragraph>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={<Paragraph size='small' color='default'>Área de Interesse</Paragraph>}
        name="area"
        rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
        {...layout}
      >
        <Select
          showSearch
          placeholder="Qual sua principal área de interesse?"
          optionFilterProp="children"
          onChange={onChangeArea}
          style={{ width: '100%' }}
        >
          {areasList.map((item, index) => (
            <Option value={item.area} key={index}>
              <Paragraph size='small' color='default'>{item.area}</Paragraph>
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label={<Paragraph size='small' color='default'>Subárea de Interesse</Paragraph>}
        name="subarea"
        rules={[{ required: true, message: 'Por favor, preencha o campo acima' }]}
        {...layout}
      >
        <Select
          showSearch
          placeholder="Quais são as suas subáreas de interesse?"
          optionFilterProp="children"
          mode="multiple"
          style={{ width: '100%' }}
          maxTagCount="responsive"
          onChange={onChangeSubarea}
          style={{ width: '100%' }}
        >
          {SubareasList.map((item, index) => (
            <Option value={item.label} key={index}>
              <Paragraph size='small' color='default'>{item.label}</Paragraph>
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Fragment>
  );
}

export default StepInfos
