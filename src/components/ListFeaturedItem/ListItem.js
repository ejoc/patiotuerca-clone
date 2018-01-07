import React from 'react';
import { List, Card, Col } from 'antd';

const { Meta } = Card;
const { Item } = List;

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    const precio = `$ ${Number(item.precio).toLocaleString('en', {
      minimumFractionDigits: 2,
    })}`;
    return (
      <Col sm={12} lg={6}>
        <Item>
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
            <Meta 
              title={item.fullName} description={precio} />
          </Card>
        </Item>
      </Col>
    );
  }
}

export default ListItem;
