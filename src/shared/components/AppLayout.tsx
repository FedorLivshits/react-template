import { theme, Layout } from 'antd';
import { styled } from 'styled-components';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

const { Content } = Layout;

const LayoutStyled = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .ant-layout-header,
  .ant-layout-footer {
    flex-shrink: 0;
  }
`;

const ContentStyled = styled(Content)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContainerStyled = styled.div<{
  borderRadiusLG: number;
  colorBgContainer: string;
}>`
  flex: 1;
  padding: 24px;
  overflow: auto;
  background: ${({ colorBgContainer }) => colorBgContainer};
  border-radius: ${({ borderRadiusLG }) => `${borderRadiusLG}px`};
`;

export const AppLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <LayoutStyled>
      <AppHeader />
      <ContentStyled>
        <ContainerStyled
          colorBgContainer={colorBgContainer}
          borderRadiusLG={borderRadiusLG}
        >
          {children}
        </ContainerStyled>
      </ContentStyled>
      <AppFooter />
    </LayoutStyled>
  );
};
