import React from "react";

import { Button } from "@components";

export const Main: React.FC = () => {
  return (
    <div className="text-center font-light py-5 bg-gray-700">
      <div className="container mx-auto">
        <h1 <% if(!(e2etest === "none")) { %>  data-test="main-heading" <% } %> className="text-white text-8xl mb-2">electio</h1>
        <p className="text-lg text-white mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button type="button">
          <a <% if(!(e2etest==="none" )) { %> data-test="docs-btn-anchor" <% } %>
              href="https://pankod.github.io/electio/"
              target="_blank"
              >
              Docs
          </a>
        </Button>
      </div>
    </div>
  );
};
