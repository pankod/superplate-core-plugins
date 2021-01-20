import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #282c34;
    padding: 32px 0;
    color: #fff;
`;

export const Container = styled.div`
    text-align: center;
    max-width: 1140px;

    h1 {
        font-size: 5.5rem;
        font-weight: 300;
        line-height: 1.2px;
    }
    p {
        font-size: 1.25rem;
        font-weight: 300;
    }
`;

export const Text = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 400;
`;
