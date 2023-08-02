import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 75%;
  height: calc(100vh - 95vh);
  margin: 1rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["white"]};

  display: flex;
  flex-direction: column;
`;
