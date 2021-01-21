import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    margin-bottom: 3rem;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 71rem;
`;

export const Col = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
`;

export const Card = styled.div`
    padding: 1rem;
    box-sizing: border-box;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled.h3`
    font-size: 1.75rem;
    margin-bottom: .5rem;
    font-weight: 500;
`;

export const CardText = styled.p`
    margin-top: .5rem;
    margin-bottom: 1rem;
    line-height: 1.5rem;
`;