import React, { Fragment } from 'react';
import {
  Button,
  message,
  Col,
  Row,
  Card,
  Typography,
  Upload,
  Space,
  Progress,
  Select,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import AvatarImage from '../shared/AvatarImage';
import EditInfos from '../shared/EditInfos';
import AddInfos from '../shared/AddInfos';

const { Option } = Select;
const { Title, Text } = Typography;

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function Seed() {
  return (
    <Fragment>
      <div className="page-profile">
        <Row align="middle">
          <Col xs={{ span: 20, offset: 1 }} sm={{ span: 20 }} md={{ span: 20 }} xl={{ span: 15 }}>
            <div className="first-column-profile">
              <Card>
                <Row>
                  <Col span={8}>
                    <AvatarImage></AvatarImage>
                    <Upload {...props}>
                      <Button type="primary" icon={<UploadOutlined />}>
                        Atualize sua foto
                      </Button>
                    </Upload>
                  </Col>
                  <Col span={15}>
                    <Row>
                      <Title level={2}>Nome de Usuário</Title>
                      <PronounInfo />
                    </Row>
                    <Row gutter={10} align="bottom" justify="start">
                      <Title level={4}>Instituição (Ensino ou Trabalho)</Title>
                      <EditInfos />
                    </Row>
                    <Col>
                      <Title level={5}>
                        Sobre Você:
                        <br />
                      </Title>
                      <Text id="about">
                        <br />
                      </Text>
                      <Title level={5}>
                        Site Pessoal:
                        <br />
                      </Title>
                      <Text id="personal_site">
                        <br />
                      </Text>
                    </Col>
                  </Col>
                </Row>
              </Card>
            </div>
            <Progress
              strokeColor={{
                '0%': '#108ee9',
                '100%': '#87d068',
              }}
              percent={99.9}
            />
          </Col>
          <Col xs={{ span: 1, offset: 1 }} sm={{ span: 7 }} md={{ span: 7 }} xl={{ span: 5 }}>
            <Card>
              <Col span={15}>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary">
                    Preencher Roda da Trilha
                  </Button>
                </Space>
                <Space direction="vertical">
                  <AddInfos />
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary" disabled>
                    Encontrar Mentor(a) Ideal
                  </Button>
                </Space>
                <Space direction="vertical">
                  <Button className="button-profile" type="primary" disabled>
                    Preencher Lista de Presença
                  </Button>
                </Space>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

function PronounInfo() {
  return (
    <>
      <Select defaultValue="Ela/Dela" style={{ width: 100, height: 32 }} bordered={false}>
        <Option value="Ele/Dele">Ele/Dele</Option>
        <Option value="Ela/Dela">Ela/Dela</Option>
        <Option value="Elu/Delu">Elu/Delu</Option>
      </Select>
    </>
  );
}
