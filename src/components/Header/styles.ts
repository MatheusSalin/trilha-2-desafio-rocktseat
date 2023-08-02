import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.2rem;

      color: ${(props) => props.theme["purple-300"]};
      background: ${(props) => props.theme["purple-100"]};
      border-radius: 8px;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    a {
      color: ${(props) => props.theme["yellow-300"]};
      background: ${(props) => props.theme["yellow-100"]};
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
`;
