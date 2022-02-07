import { List, Button, Title } from 'antd';

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
          title={<Title level = {4}>{item.title}</Title>}
        />
      </List.Item>
    )}
  />
  )
}

export default PointsList;