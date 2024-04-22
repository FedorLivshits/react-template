import { styled } from 'styled-components';
import logo from '../assets/react.svg';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    max-height: 70%;
    max-width: 70%;
  }
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="Logo" />
    </LogoWrapper>
  );
};
