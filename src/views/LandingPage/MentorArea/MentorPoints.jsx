import { List, Button } from 'antd';

import { Paragraph } from '../../../components/Paragraph';

const data = [
  {
    number: '1',
    title: 'Ant Design Title 1',
  },
  {
    number: '2',
    title: 'Ant Design Title 2',
  },
  {
    number: '3',
    title: 'Ant Design Title 3',
  },
];

function PointsList(){
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          number={<Button size= 'large' type="primary" disabled>{item.number}</Button>}
          title={<Paragraph color='secondary'>{item.title}</Paragraph>}
        />
      </List.Item>
    )}
  />
  )
}

export default PointsList;