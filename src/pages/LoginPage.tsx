import { Form, Input, Button, Row } from 'antd';
import styled from 'styled-components';
import logo from '../assets/react.svg';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const StyledForm = styled(Form)`
  padding: 32px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: 400px;
`;

export const LoginPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values: unknown) => {
    console.log('Received values of form: ', values);
  };

  return (
    <LoginContainer>
      <StyledForm
        name="login_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <Row
          style={{ width: '100%', marginBottom: '32px' }}
          align="middle"
          justify="center"
        >
          <img style={{ height: '40px' }} src={logo} alt="Logo" />
        </Row>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
        </Form.Item>
      </StyledForm>
    </LoginContainer>
  );
};
