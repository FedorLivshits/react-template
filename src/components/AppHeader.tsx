import { Layout, Menu, Row } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES_URLS } from '../constants';
import { Logo } from './Logo';

const { Header } = Layout;
const { MAIN } = ROUTES_URLS;

const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RowStyled = styled(Row)`
  height: 100%;
`;

const MenuStyled = styled(Menu)`
  width: 200px;
`;

export const AppHeader = () => {
  const location = useLocation();

  return (
    <HeaderStyled>
      <RowStyled>
        <Logo />
        <MenuStyled mode="horizontal" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key={MAIN}>
            <Link to={MAIN}>Page 1</Link>
          </Menu.Item>
        </MenuStyled>
      </RowStyled>
    </HeaderStyled>
  );
};
