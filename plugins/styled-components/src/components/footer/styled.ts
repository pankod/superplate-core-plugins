import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    padding: 32px 0;
    background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const LogoButton = styled.a`
    display: block;
    margin-bottom: 3px;
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0 0 32px 0;
    margin: 32px 0;
`;

export const ListItem = styled.li`
    margin: 0px 8px;
`;