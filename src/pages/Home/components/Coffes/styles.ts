import styled from "styled-components";

export const Coofs = styled.header`
  width: 75%;
  max-height: 25.9rem;
  margin: auto;
  display: grid;
  padding: 2.5rem;
`;

export const Title = styled.h1`
  width: 75%;
  height: 5rem;
  margin: 2rem auto;
  padding: 2.5rem;
  h2 {
    font-size: 32;
    font-family: "Baloo 2";
    font-weight: bolder;
    color: ${(props) => props.theme["gray-800"]};

    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;
