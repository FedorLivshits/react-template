import { Button, Result } from 'antd';
import { useAuthService } from '../hooks';

export const AppError = () => {
  const { logout } = useAuthService();

  return (
    <Result
      status="error"
      title="Something went wrong. Please try again later."
      extra={
        <>
          <Button
            key="reload"
            onClick={() => {
              location.reload();
            }}
          >
            Reload page
          </Button>
          <Button type="primary" key="logout" onClick={logout}>
            Log out
          </Button>
        </>
      }
    />
  );
};
