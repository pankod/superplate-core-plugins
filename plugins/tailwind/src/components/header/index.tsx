import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="text-center bg-gray-800" <% if (testing === 'testing-library') { %> data-testid="container" <% } %> >
      <Logo />
    </div>
  );
};
