import styled from 'styled-components';

export const Card = styled.div`
  max-width: 20rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 2rem auto;
`

export const CardHeader = styled.header`
  padding: 1rem;
  border-bottom: 1px solid green;

  h2 {
    font-weight: 600;
  }
`
export const CardContent = styled.main`
  padding: 1.25rem;

  p {
    margin-bottom: 1rem;
    color: darkslategrey;
  }
`
export const CardFooter = styled.footer`
  padding: 1.5rem;
  border-top: 1px solid green;
  text-align: center;
`

export const Button = styled.a`
  background-color: green;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
`