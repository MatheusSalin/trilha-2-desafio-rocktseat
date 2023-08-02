import styled from "styled-components";

export const CoffeesStyleds = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  margin: 2rem 1rem;
`;

export const CardElementsFormat = styled.div`
  width: 16rem;
  height: 19.375rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme["gray-300"]};
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  gap: 1.15rem;
`;

export const Tag = styled.div`
  min-width: 7.5rem;
  min-height: 9.5625rem;
  display: contents;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.5rem;
  }
`;

export const TagLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

export const TagItem = styled.pre`
  font-family: "Roboto";
  font-weight: bold;
  font-size: 10px;
  background: ${(props) => props.theme["yellow-100"]};
  color: ${(props) => props.theme["yellow-300"]};
  border-radius: 16px;
  padding: 0.3rem 0.8rem;
`;

export const Description = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 4.375rem;
  min-width: 13.5rem;

  h4 {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 1.25rem;
    font-family: "Baloo 2";
  }

  p {
    font-family: "Roboto";
    font-size: 0.8rem;
    width: 93%;
    padding-bottom: 0.8rem;
    text-align: center;
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const Add = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 1rem;

  p {
    font-size: 1rem;
    font-family: "Roboto";
    color: ${(props) => props.theme["gray-700"]};
  }
  span {
    font-size: 1.6rem;
    font-family: "Baloo 2";
    padding-right: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }
  div {
    max-width: 5rem;
    height: 2.2rem;
    display: flex;
    padding-inline: 0.3rem;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.01rem;

    border-radius: 8px;
    background: ${(props) => props.theme["gray-500"]};

    button {
      display: flex;
      align-items: center;

      background: ${(props) => props.theme["gray-500"]};
      font-size: 1rem;
      border: 0;
      border-radius: 8px;
      padding-inline: 0.2rem;
      color: ${(props) => props.theme["purple-300"]};
    }

    input {
      width: 1rem;
      background: transparent;
      height: 1.8rem;
      font-size: 1.2rem;
      border: transparent;
      text-align: center;
    }
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme["purple-300"]};
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 8px;
  }
`;
