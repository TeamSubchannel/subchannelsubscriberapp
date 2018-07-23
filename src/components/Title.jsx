import React from "react";
import styled from "styled-components";
import { Title1, Row, Button, I } from "../theme/index";

const Div = styled.div`
  width: 100%;
  max-width: 400px;
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  margin-left: 2em;
  margin-top: 1em;
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export default function Title({ title }) {
  return (
    <Div>
      <Title1>{title}</Title1>
      <Row>
        <Button larger>
          Start over
          <span>
            <I replay className="fa fa-undo" />
          </span>
        </Button>
        <Button>
          Play
          <span>
            <I className="fa fa-play" />
          </span>
        </Button>
      </Row>
    </Div>
  );
}
