import { Layout } from 'antd';
import { styled } from 'styled-components';

const { Footer } = Layout;

const FooterStyled = styled(Footer)`
  text-align: center;
`;

export const AppFooter = () => {
  return <FooterStyled>Footer ©{new Date().getFullYear()}</FooterStyled>;
};
