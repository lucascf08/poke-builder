import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";
import itemFundo from "./assets/item-fundo.png";

interface appProps {
  open: boolean;
}

export const StyledApp = withTheme(styled.div<appProps>`
  background: ${(props) => props.theme.palette.primary.light};
  font-size: larger;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 20vh 80vh;
  justify-content: flex-start;

  header {
    background: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.light};
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    grid-column: 1 / span 4;

    text-align: center;
  }

  main {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .pokeball-icon {
      width: 2rem;
    }
  }
  .poke-checker {
    grid-column: 1 / span 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    font-size: larger;
    .main-infos {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
      width: 100%;
    }
  }
  .team-container {
    grid-column: span 1;

    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    padding: 1rem 1rem;
    align-content: center;
    justify-content: flex-start;
    align-items: flex-start;

    .trash-icon {
      align-self: flex-end;
    }
  }

  @media (max-width: 80rem) {
    grid-template-rows: auto;
    main,
    aside {
      grid-column: 1 / span 4 !important;
    }
    .img-container {
      min-width: 20vh;
      min-height: 20vh;
    }
  }
`);
interface props {
  type: string;
}
export const TypeColorWrapper = withTheme(styled.span<props>`
  background-color: ${(props) =>
    props.type === "fire"
      ? "#FF8832"
      : props.type === "water"
      ? "#48C3CB"
      : props.type === "grass"
      ? "#74CB48"
      : props.type === "bug"
      ? "#A8B820"
      : props.type === "dark"
      ? "#705848"
      : props.type === "dragon"
      ? "#7038F8"
      : props.type === "electric"
      ? "#F8D030"
      : props.type === "fairy"
      ? "#EE99AC"
      : props.type === "fighting"
      ? "#C03028"
      : props.type === "flying"
      ? "#A890F0"
      : props.type === "ghost"
      ? "#705898"
      : props.type === "ground"
      ? "#E0C068"
      : props.type === "ice"
      ? "#98D8D8"
      : props.type === "normal"
      ? "#A8A878"
      : props.type === "poison"
      ? "#A040A0"
      : props.type === "psychic"
      ? "#F85888"
      : props.type === "rock"
      ? "#B8A038"
      : props.type === "steel"
      ? "#B8B8D0"
      : props.theme.palette.secondary.main};
  border-color: ${(props) =>
    props.type === "fire"
      ? "#FF8832"
      : props.type === "water"
      ? "#48C3CB"
      : props.type === "grass"
      ? "#74CB48"
      : props.type === "bug"
      ? "#A8B820"
      : props.type === "dark"
      ? "#705848"
      : props.type === "dragon"
      ? "#7038F8"
      : props.type === "electric"
      ? "#F8D030"
      : props.type === "fairy"
      ? "#EE99AC"
      : props.type === "fighting"
      ? "#C03028"
      : props.type === "flying"
      ? "#A890F0"
      : props.type === "ghost"
      ? "#705898"
      : props.type === "ground"
      ? "#E0C068"
      : props.type === "ice"
      ? "#98D8D8"
      : props.type === "normal"
      ? "#A8A878"
      : props.type === "poison"
      ? "#A040A0"
      : props.type === "psychic"
      ? "#F85888"
      : props.type === "rock"
      ? "#B8A038"
      : props.type === "steel"
      ? "#B8B8D0"
      : props.theme.palette.secondary.main};
  border-style: solid;
  border-width: ${(props) => (props.type ? "4px" : "0px")};
  color: white;
`);

export const StyledPokeSelector = withTheme(styled.div<props>`
  min-width: 40vh;
  min-height: 40vh;
  background: url(${itemFundo});

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
  }
  .inner-div {
    img {
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .info-bar {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${(props) =>
      props.type === "fire"
        ? "#FF8832"
        : props.type === "water"
        ? "#48C3CB"
        : props.type === "grass"
        ? "#74CB48"
        : props.type === "bug"
        ? "#A8B820"
        : props.type === "dark"
        ? "#705848"
        : props.type === "dragon"
        ? "#7038F8"
        : props.type === "electric"
        ? "#F8D030"
        : props.type === "fairy"
        ? "#EE99AC"
        : props.type === "fighting"
        ? "#C03028"
        : props.type === "flying"
        ? "#A890F0"
        : props.type === "ghost"
        ? "#705898"
        : props.type === "ground"
        ? "#E0C068"
        : props.type === "ice"
        ? "#98D8D8"
        : props.type === "normal"
        ? "#A8A878"
        : props.type === "poison"
        ? "#A040A0"
        : props.type === "psychic"
        ? "#F85888"
        : props.type === "rock"
        ? "#B8A038"
        : props.type === "steel"
        ? "#B8B8D0"
        : props.theme.palette.secondary.main};
    color: white;
  }

  border-color: ${(props) =>
    props.type === "fire"
      ? "#FF8832"
      : props.type === "water"
      ? "#48C3CB"
      : props.type === "grass"
      ? "#74CB48"
      : props.type === "bug"
      ? "#A8B820"
      : props.type === "dark"
      ? "#705848"
      : props.type === "dragon"
      ? "#7038F8"
      : props.type === "electric"
      ? "#F8D030"
      : props.type === "fairy"
      ? "#EE99AC"
      : props.type === "fighting"
      ? "#C03028"
      : props.type === "flying"
      ? "#A890F0"
      : props.type === "ghost"
      ? "#705898"
      : props.type === "ground"
      ? "#E0C068"
      : props.type === "ice"
      ? "#98D8D8"
      : props.type === "normal"
      ? "#A8A878"
      : props.type === "poison"
      ? "#A040A0"
      : props.type === "psychic"
      ? "#F85888"
      : props.type === "rock"
      ? "#B8A038"
      : props.type === "steel"
      ? "#B8B8D0"
      : props.theme.palette.secondary.main};
  border-style: solid;
  border-width: ${(props) => (props.type ? "4px" : "0px")};
`);

export const StyledPokeContainer = withTheme(styled.div<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${itemFundo});

  border-color: ${(props) =>
    props.type === "fire"
      ? "#FF8832"
      : props.type === "water"
      ? "#48C3CB"
      : props.type === "grass"
      ? "#74CB48"
      : props.type === "bug"
      ? "#A8B820"
      : props.type === "dark"
      ? "#705848"
      : props.type === "dragon"
      ? "#7038F8"
      : props.type === "electric"
      ? "#F8D030"
      : props.type === "fairy"
      ? "#EE99AC"
      : props.type === "fighting"
      ? "#C03028"
      : props.type === "flying"
      ? "#A890F0"
      : props.type === "ghost"
      ? "#705898"
      : props.type === "ground"
      ? "#E0C068"
      : props.type === "ice"
      ? "#98D8D8"
      : props.type === "normal"
      ? "#A8A878"
      : props.type === "poison"
      ? "#A040A0"
      : props.type === "psychic"
      ? "#F85888"
      : props.type === "rock"
      ? "#B8A038"
      : props.type === "steel"
      ? "#B8B8D0"
      : props.theme.palette.secondary.main};
  border-style: solid;
  border-width: 4px;
  .info-bar {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.type === "fire"
        ? "#FF8832"
        : props.type === "water"
        ? "#48C3CB"
        : props.type === "grass"
        ? "#74CB48"
        : props.type === "bug"
        ? "#A8B820"
        : props.type === "dark"
        ? "#705848"
        : props.type === "dragon"
        ? "#7038F8"
        : props.type === "electric"
        ? "#F8D030"
        : props.type === "fairy"
        ? "#EE99AC"
        : props.type === "fighting"
        ? "#C03028"
        : props.type === "flying"
        ? "#A890F0"
        : props.type === "ghost"
        ? "#705898"
        : props.type === "ground"
        ? "#E0C068"
        : props.type === "ice"
        ? "#98D8D8"
        : props.type === "normal"
        ? "#A8A878"
        : props.type === "poison"
        ? "#A040A0"
        : props.type === "psychic"
        ? "#F85888"
        : props.type === "rock"
        ? "#B8A038"
        : props.type === "steel"
        ? "#B8B8D0"
        : props.theme.palette.secondary.main};
    color: white;
  }

  text-overflow: ellipsis;
`);
