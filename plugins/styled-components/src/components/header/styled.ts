import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.blackGrey};
`;