import { ReactIcon } from '@shared/assets';
import { styled } from 'styled-components';

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
      <img src={ReactIcon} alt="Logo" />
    </LogoWrapper>
  );
};
