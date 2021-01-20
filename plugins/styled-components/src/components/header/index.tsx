import React from "react";
import Image from "next/image";

import { Logo } from "@components";
import { HeaderWrapper, Container, Nav, NavBrand, Menu, MenuItem } from "./styled"

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <NavBrand>
            <Logo />
            <Menu>
              <MenuItem href="#">
                Docs
              </MenuItem>
            </Menu>
          </NavBrand>
          <MenuItem href="https://github.com/pankod/next-cli" target="_blank">
            <Image
              src="/icons/github.svg"
              alt="nextjs"
              width="28"
              height="29"
            />
          </MenuItem>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};