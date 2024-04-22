import { Row, Typography } from 'antd';
import { AppLayout } from '../components';

export const NotFoundPage = () => {
  return (
    <AppLayout>
      <Row style={{ width: '100%' }} align="middle" justify="center">
        <Typography.Title>404. Страница не найдена</Typography.Title>
      </Row>
    </AppLayout>
  );
};
