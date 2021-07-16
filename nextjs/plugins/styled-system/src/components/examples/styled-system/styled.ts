import styled from "styled-components";
import { border, color, layout, space, typography } from "styled-system";

export const Card = styled.div`
    ${border}
    ${color}
  ${layout}
  ${space}
`;

export const CardHeader = styled.header`
    h2 {
        font-weight: 600;
    }

    ${border}
    ${space}
`;

export const CardContent = styled.main`
    p {
        margin-bottom: 1rem;
        color: darkslategrey;
    }

    ${space}
`;

export const CardFooter = styled.footer`
    ${border}
    ${space}
  ${typography}
`;

export const Button = styled.a`
    text-decoration: none;

    ${border}
    ${color}
  ${space}
  ${typography}
`;
