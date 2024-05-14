import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from './components';
import { AuthProvider } from './context';

const queryClient = new QueryClient();

export const ProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ConfigProvider theme={{}}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </AuthProvider>
      </QueryClientProvider>
    </ConfigProvider>
  );
};
