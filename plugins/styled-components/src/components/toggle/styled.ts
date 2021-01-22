import styled from "styled-components";

export const ToggleContainer = styled.button<{ themeName: string }>`
  background: ${({ theme }) => theme.colors.gradient};
  border: 1px solid ${({ theme }) => theme.colors.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 4rem;
  height: 2rem;

  &:focus {
    outline: none;
  }

  <%_ if (features.includes("svgr")) { _%>
    svg
  <%_ } else { _%>
    div
  <%_ } _%> {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ themeName }) => (themeName === "light" ? 'translateY(0)' : 'translateY(100px)')};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ themeName }) => (themeName === "light" ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;

