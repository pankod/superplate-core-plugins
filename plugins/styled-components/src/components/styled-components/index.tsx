import React from "react";
import { Card, CardHeader, CardContent, CardFooter, Button } from "./styled";


export const StyledComponentsExample: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <h2>Styled-Components Example</h2>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, officiis
          dolor eaque optio quam deserunt nesciunt tempore iste unde cum eius
          explicabo debitis non nostrum incidunt natus. Molestiae, veritatis
          quo.
        </p>
        <p>
          A cupiditate quae quidem accusamus, sint dolores distinctio doloribus
          earum culpa quas facilis repellendus soluta illo provident eaque
          inventore sapiente molestias atque dolor ipsam autem eveniet dolorem.
          Quibusdam, nostrum cupiditate.
        </p>
      </CardContent>
      <CardFooter>
        <Button
          href="https://styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Documentation
        </Button>
      </CardFooter>
    </Card>
  );
};
