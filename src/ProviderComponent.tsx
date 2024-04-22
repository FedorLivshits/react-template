import { ConfigProvider } from 'antd';

// https://ant.design/docs/react/customize-theme
export const ProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ConfigProvider theme={{}}>{children}</ConfigProvider>;
};
