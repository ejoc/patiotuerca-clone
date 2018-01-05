// import 'whatwg-fetch';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Form,
  Input,
  Row,
  Col,
  Upload,
  Button,
  Icon,
  message,
  Checkbox,
  Divider,
  InputNumber,
} from 'antd';

import history from '../../history';
import s from './Form.css';

const FormItem = Form.Item;
const { TextArea } = Input;

class AnuncioForm extends React.Component {

  state = {
    message: null,
    loading: false,
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true,
    }, () => {
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const formData = new FormData();
          formData.append('image', values.image[0]);
          formData.append('marca', values.marca);
          formData.append('modelo', values.modelo);
          formData.append('precio', values.precio);
          formData.append('kilometraje', values.kilometraje);
          formData.append('titulo', values.titulo);
          formData.append('destacado', values.destacado);
          fetch('/anuncios', {
            method: 'POST',
            body: formData,
          })
            .then(result => {
              console.log(result);
              this.setState({
                message: 'Tu aviso fue creado exitosamente',
                loading: false,
              });
              // history.push('/');
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    })
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
        lg: { span: 20 },
      },
    };

    const marca = getFieldValue('marca');
    const modelo = getFieldValue('modelo');
    const kilometraje = getFieldValue('kilometraje');
    const precio = getFieldValue('precio');

    const destacado = getFieldValue('destacado');

    let titulo = '';
    if (marca && modelo && kilometraje && precio) {
      titulo = `${marca} ${modelo} ${kilometraje} KM, $${precio}`;
    }

    let valor = 0.0;
    if (destacado) {
      valor = 3.0;
    }

    if(this.state.message) {
      return (
        <div className={s.message}>
          <h3>{this.state.message}</h3>
        </div>
      );
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col xs={24} lg={{ span: 10 }}>
            <FormItem label="MARCA">
              {getFieldDecorator('marca', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingrese la marca',
                  },
                ],
              })(<Input placeholder="Ingresa la marca" />)}
            </FormItem>

            <FormItem label="MODELO">
              {getFieldDecorator('modelo', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingrese el modelo',
                  },
                ],
              })(<Input placeholder="Ingresa el modelo" />)}
            </FormItem>

            <FormItem {...formItemLayout} label="PRECIO DE VENTA">
              {getFieldDecorator('precio', {
                initialValue: 0.0,
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingrese el precio',
                  },
                ],
              })(
                <InputNumber
                  step={0.01}
                  // placeholder="$ 0.00"
                  formatter={value =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  style={{ width: '100%' }}
                  // onChange={onChange}
                />,
              )}
            </FormItem>

            <FormItem {...formItemLayout} label="KILOMETRAJE">
              {getFieldDecorator('kilometraje', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingrese el kilometraje',
                  },
                ],
              })(
                <Input
                  placeholder="0.00"
                  addonAfter="KM"
                  type="number"
                  // onChange={onChange}
                />,
              )}
            </FormItem>

            <FormItem label="DESCRIPCION">
              {getFieldDecorator('descripcion')(<TextArea rows={4} />)}
            </FormItem>

            <FormItem label="FOTO">
              {getFieldDecorator('image', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload
                  name="logo"
                  action="/upload.do"
                  listType="picture"
                  accept="image"
                  beforeUpload={file => false}
                >
                  <Button>
                    <Icon type="upload" /> Examinar
                  </Button>
                </Upload>,
              )}
            </FormItem>
          </Col>
          <Col xs={24} lg={{ span: 10, offset: 2 }}>
            <FormItem label="Asi se mostrará el tu aviso en la versión impresa">
              {getFieldDecorator('titulo', {
                initialValue: titulo,
                rules: [
                  {
                    required: true,
                    message: 'Por favor ingrese el titulo',
                  },
                ],
              })(<TextArea placeholder="Titulo de tu aviso" rows={4} />)}
            </FormItem>

            <FormItem>
              {getFieldDecorator('destacado', {
                valuePropName: 'checked',
                initialValue: false,
              })(<Checkbox>Destacar Aviso</Checkbox>)}
            </FormItem>
            <Divider />
            <p>
              TOTAL A PAGAR:<span
                style={{ float: 'right' }}
                className={s.currency}
              >
                {Number(valor).toLocaleString('en', {
                  minimumFractionDigits: 2,
                })}
              </span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button onClick={() => console.log('cancelar')}>CANCELAR</Button>
            <Button style={{ marginLeft: 12 }} type="primary" htmlType="submit" loading={this.state.loading} >
              CREAR AVISO
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default withStyles(s)(Form.create()(AnuncioForm));
