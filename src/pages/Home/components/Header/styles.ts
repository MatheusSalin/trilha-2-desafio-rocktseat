import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 75%;
  max-height: 100rem;
  margin: 0.5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["white"]};

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;

  h1 {
    font-family: "Baloo 2";
    font-style: cursive;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme["gray-900"]};
  }

  p {
    margin-top: 1rem;
    width: 100%;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  tr {
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    align-items: center;
    td {
      list-style-type: none;
      display: flex;
      align-items: baseline;
      gap: 0.8rem;
      p {
        display: flex;
        font-family: "Roboto";
        font-size: 1rem;
      }
    }
  }

  img {
    width: 75%;
    margin-left: 3rem;
  }
`;

const COLOR_ICONS: any = {
  darkYellow: "yellow-300",
  yeloow: "yellow-200",
  gray: "gray-700",
  purple: "purple-200",
};

interface iconColor {
  iconColor: "darkYellow" | "yeloow" | "gray" | "purple";
}

export const PhosphorContainer = styled.div<iconColor>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme[COLOR_ICONS[props.iconColor]]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
