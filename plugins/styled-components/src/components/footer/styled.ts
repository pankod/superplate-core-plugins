import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoButton = styled.a`
    display: block;
    margin-bottom: .19rem;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const ListItem = styled.li`
    margin: 0 .5rem;
`;