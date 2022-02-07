import { useState } from 'react';
import Image from 'next/image';
import { Button, Row, Modal } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import styles from './Video.module.scss'

import { Section } from '../Section';

export default function Video(props) {
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

  return (
    <div className={styles.Video}>
      <Row align="middle" justify='center'>
        <Button
          type="primary"
          onClick={showModal}
          shape="circle"
          icon={<CaretRightOutlined />}
          size="large"
        />
        <Modal
          visible={isModalVisible}
          centered={true}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
          footer={[]}
        >
          <Row align="middle" justify="space-around">
            <iframe
              width="90%"
              height={360}
              src={`https://www.youtube.com/embed/${props.youtubeID}?autoplay=1`}
              title={props.title}
              frameBorder={0}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Row>
        </Modal>
      </Row>
    </div>
  );
}
