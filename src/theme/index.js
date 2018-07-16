import styled, { css } from "styled-components";

export const Title1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color || "#fff"};
  font-size: 3.2em;
  margin: ${props => props.margin || ".5em 0"};
`;

export const Title2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color || "#fff"};
  margin: ${props => props.margin || ".25em 0"}
  font-size: 2em;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: space-around
  width: 85px;
  height: 30px;
  background: rgba(0, 0, 0, 0);
  margin: 0 0.15em;
  border-radius: 3px;
  border: 2px solid #fff;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9em;
  cursor: pointer;
  outline: none;
  &:hover {
    color: inherit;
    background-color: #fff;
  }
  ${props =>
    props.larger &&
    css`
      width: 110px;
    `};
`;

export const I = styled.i`
  ${props =>
    props.replay &&
    css`
      &:hover {
        transition: 2s;
        transform: rotate(-360deg);
      }
    `};
`;
