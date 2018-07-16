import styled, { css } from "styled-components";

// DIVs

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 65px 1fr 1fr 1fr 1fr 225px;
  grid-template-areas:
    "p p p p p p"
    "p p p p p p"
    "p p p p p p"
    "p p p p p p"
    "p p p p p p"
    "s s s s s s";
`;

export const Row = styled.div`
  display: flex;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignitems};
  justify-content: ${props => props.justifycontent};
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
  color: ${props => props.color || "#fff"};
  margin: ${props => props.margin || ".25em 0"}
  font-size: ${props => props.fontsize || "2em"}
`;

export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color || "#4d4d4d"};
  margin: ${props => props.margin || ".25em 0"};
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
      width: 110px;
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
      &:hover {
        background-color: #01a0a6;
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
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  padding: 0em 1em;
  outline: none;
  &:focus {
    border: 1px solid ${props => props.theme.primary};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  margin: ${props => props.margin};
  position: relative;
`;

export const UserWarn = styled.div`
  position: absolute;
  top: -0.2em;
  bottom: 0;
  left: ${props => props.left};
  right: 0;
  z-index: 10000000;
`;
