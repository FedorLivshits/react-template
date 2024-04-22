import { Spin } from 'antd';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PageLoader = () => {
  return (
    <LoaderStyled>
      <Spin size="large" />
    </LoaderStyled>
  );
};
