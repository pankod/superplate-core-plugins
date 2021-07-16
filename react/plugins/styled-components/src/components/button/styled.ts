import styled from "styled-components/macro";

export const BaseButton = styled.button`
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
    border-radius: .3rem;
    border: none;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
`;