import styled from "styled-components/macro";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 2rem 0;
    color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
    text-align: center;
    max-width: 71rem;

    h1 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2rem;
        padding-bottom: .75rem;
    }
    p {
        font-size: 1.25rem;
        font-weight: 300;
    }
`;
