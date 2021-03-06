import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";
import itemFundo from "./assets/item-fundo.png";

export const StyledApp = withTheme(styled.div`
  background: ${(props) => props.theme.palette.primary.light};
  font-size: larger;

  display: grid;
  gap: 1rem;
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
    font-size: larger;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    align-self: center;

    .main-infos {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      width: 100%;
    }
  }

  .team-container {
    grid-column: span 1;

    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

    align-content: flex-start;
    justify-content: center;
    align-items: center;
    align-self: center;
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
    min-width: 40vh;
    min-height: 40vh;
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

  .trash-icon {
    align-self: flex-end;
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
  border-width: 4px;
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

  text-overflow: ellipsis;
`);
