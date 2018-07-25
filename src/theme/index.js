import styled, { css } from "styled-components";

// DIVs

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 525px auto;
  grid-template-areas:
    "p p p p p p"
    "s s s s s s";
`;

export const Row = styled.div`
  display: flex;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  margin: ${props => props.margin};
  width: ${props => props.width};
  padding: ${props => props.padding};
`;

// TEXT

export const Title1 = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color || "#fff"};
  font-size: 3.2em;
  margin: ${props => props.margin || ".5em 0"};
`;

export const Title2 = styled.h2`
  font-family: "Montserrat", sans-serif;
  color: ${props => (props.dark ? "#686868" : "#fff")};
  margin: ${props => props.margin || ".25em 0"}
  font-size: ${props => props.fontsize || "2em"}
  
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color || "#4d4d4d"};
  margin: ${props => props.margin || ".25em 0"};
  font-weight: ${props => props.fontweight || "300"};
  font-size: ${props => props.fontsize};
  ${props =>
    props.styled &&
    css`
      cursor: pointer;
      font-size: 0.9em;
      color: #019095;
      -webkit-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -ms-user-select: none;
    `};
`;

// BUTTONS

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
      width: 115px;
    `};
  ${props =>
    props.signup &&
    css`
      width: 320px;
      height: 40px;
      background-color: #019095;
      color: #fff;
      margin-top: 0.8em;
      border: none;
      padding: 0 1em;
      justify-content: space-between;
      &:hover {
        background-color: #01a0a6;
        cursor: pointer;
        color: #fff;
        border: none;
      }
    `};
  ${props =>
    props.save &&
    css`
      width: 70px;
      height: 30px;
      background-color: #019095;
      color: #fff;
      margin: ${props => props.margin || "0 0 0 .8em"}
      border: none;
      &:hover {
        background-color: #01a0a6;
        cursor: pointer;
        color: #fff;
        border: none;
      }
    `};
  ${props =>
    props.cancel &&
    css`
        width: 70px;
        height: 30px;
        background-color: #ccc;
        color: #fff;
        margin: ${props => props.margin || "0 0 0 .8em"}
        border: none;
        &:hover {
          background-color: #ddd;
          cursor: pointer;
          color: #fff;
          border: none;
        }
      `};
  ${props =>
    props.extralarge &&
    css`
      width: 200px;
      height: 40px;
      background-color: ${props => props.backgroundcolor};
      color: #fff;
      margin-top: 0.8em;
      border: none;
      &:hover {
        background-color: ${props => props.hovercolor};
        cursor: pointer;
        color: #fff;
        border: none;
      }
    `};
`;

// ICONS

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

// INPUTS & LABELS

export const Input = styled.input`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  height: 40px;
  width: 290px;
  background-color: #fff;
  color: #656565;
  cursor: text;
  border-radius: 3px;
  border: ${props => props.border || "1px solid #ccc"};
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  padding: 0em 1em;
  outline: none;
  &:focus {
    border: 1px solid #168787;
  }
  @media (max-width: 400px) {
    width: 225px;
  }
  ${props =>
    props.notactive &&
    css`
      border: 1px solid transparent;
      color: #9d9d9d;
      cursor: default;
      pointer-events: none;
      &:focus {
        border: 1px solid transparent;
      }
    `};
  ${props =>
    props.small &&
    css`
      width: 150px;
      height: 35px;
    `};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  margin: ${props => props.margin};
  position: relative;
  border: none;
  @media (max-width: 400px) {
    width: 225px;
  }
  ${props =>
    props.notactive &&
    css`
      pointer-events: none;
    `};
`;

export const UserWarn = styled.div`
  position: absolute;
  top: ${props => props.top || "-.2em"};
  bottom: 0;
  left: ${props => props.left};
  right: 0;
  z-index: 10000000;
`;
