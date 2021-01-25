import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  max-width: 71rem;
  min-width: 71rem;

  @media (max-width: 575px) {
    min-width: 22rem;
  }
`;