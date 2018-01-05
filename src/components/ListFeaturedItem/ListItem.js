import React from 'react';
import { List, Card, Col } from 'antd';

const { Meta } = Card;

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Col sm={12} lg={6}>
        <List.Item>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt={item.marca}
                src={item.foto}
                style={{ width: 240, height: 200 }}
              />
            }
          >
            <Meta title={item.fullName} description={item.precio} />
          </Card>
        </List.Item>
      </Col>
    );
  }
}

export default ListItem;
