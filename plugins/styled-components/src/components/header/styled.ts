import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.blackGrey};
    padding: 0 150px;
`;

export const Container = styled.div`
    max-width: 1140px;
    min-width: 1140px;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBrand = styled.div`
    display: flex;
    align-items: center;
`;

export const Menu = styled.div`
    margin-left: 50px;
`;

export const MenuItem = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        text-decoration: underline;
    }
`;