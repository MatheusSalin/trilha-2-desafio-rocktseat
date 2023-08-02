import styled from "styled-components";

export const CheckoutStyled = styled.div`
  width: 76rem;
  margin: 1rem auto;
  padding: 2.5rem;
  gap: 1.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Address = styled.div`
  width: 57%;

  h2 {
    margin: 1.5rem 0;
    font-family: "Baloo 2";
    font-style: cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxAddress = styled.div`
  background: ${(props) => props.theme["gray-300"]};
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    padding-top: 1rem;
    margin-left: 1.5rem;

    div {
      display: block;
      flex-direction: column;
      margin: 0.5rem;
      h3 {
        font-family: "Roboto";
        font-size: 16px;
        width: 400;
        color: ${(props) => props.theme["gray-800"]};
      }
      p {
        font-family: "Roboto";
        font-size: 14px;
        width: 400;
        color: ${(props) => props.theme["gray-700"]};
        margin-top: 0.3rem;
      }
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;

    input {
      padding: 1rem;
      font-size: 12px;
      border-radius: 8px;
      border: transparent;
      margin: 0.5rem 0.2rem 0 0.5rem;
    }

    input:first[type="number"] {
      width: 40%;
      margin-right: 60%;
    }

    input[type="Rua"] {
      width: 100%;
    }

    input[type="Rua"] {
      width: 100%;
    }

    input[type="number"] {
      width: 40%;
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    input[type="Complemento"] {
      width: 56%;
    }
    input[type="Bairro"] {
      width: 40%;
      margin-bottom: 2rem;
    }
    input[type="Cidade"] {
      width: 44%;
      margin-bottom: 2rem;
    }
    input[type="UF"] {
      width: 10%;
      margin-bottom: 2rem;
    }
  }
`;

export const BoxPayment = styled.div`
  background: ${(props) => props.theme["gray-300"]};
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  div {
    display: flex;
    align-items: center;
    margin: 1rem;

    div {
      width: 100%;
      display: block;
      flex-direction: column;
      margin: 0.5rem;
      span {
        font-family: "Roboto";
        font-size: 16px;
        width: 400;
        color: ${(props) => props.theme["gray-800"]};
      }
      p {
        font-family: "Roboto";
        font-size: 14px;
        width: 400;
        color: ${(props) => props.theme["gray-700"]};
        margin-top: 0.3rem;
      }
    }
  }

  form {
    display: flex;
    margin: auto;
  }

  label {
    display: flex;
    margin: 0.5rem;
    padding: 1rem;
    gap: 0.2rem;
    align-items: stretch;

    background: ${(props) => props.theme["gray-500"]};
    border: solid 2px transparent;
    border-radius: 8px;

    &:hover {
      border-color: ${(props) => props.theme["purple-200"]};
    }
  }
  label::selection {
    background: ${(props) => props.theme["purple-100"]};
    border-color: ${(props) => props.theme["purple-200"]};
  }

  input:checked + label {
    background: ${(props) => props.theme["purple-100"]};
    border-color: ${(props) => props.theme["purple-200"]};
  }

  input {
    appearance: none;
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }

  span {
    font-size: 12px;
  }
`;

export const Order = styled.div`
  width: 43%;

  @media (max-width: 768px) {
    width: 100%;
  }

  h2 {
    margin: 1.5rem 0;
    font-family: "Baloo 2";
    font-style: cursive;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const Request = styled.div`
  background: ${(props) => props.theme["gray-300"]};
  border-radius: 0 8px 0 8px;
  min-height: 15rem;
  min-width: 100%;
`;
