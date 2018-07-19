import React from "react";
import styled from "styled-components";
import { Text, Row } from "../../theme/index";
import AddCardForm from "../../shared/AddCardForm";

const Div = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled(Text)`
  cursor: pointer;
  font-size: 0.9em;
  color: ${props => props.primary && "#019095"};
`;

const Hr = ({ title }) => (
  <div style={{ width: "100%" }}>
    <Text>{title}</Text>
    <hr />
  </div>
);

export default function PaymentsForm({
  card,
  editcard,
  editcarddetails,
  handlecancel
}) {
  return (
    <Div>
      <Hr title="Payments" />
      <Row
        margin="1em 0"
        width="100%"
        height="60px"
        justifycontent="space-between"
        align-items="center"
      >
        {editcarddetails && (
          <Row width="50%">
            <AddCardForm handleclick={handlecancel} />
          </Row>
        )}
        {card && !editcarddetails && <Text>{card}</Text>}
        {!card && !editcarddetails && <Text>No card on file</Text>}
        {!editcarddetails && (
          <StyledText primary onClick={editcard}>
            Edit Card
          </StyledText>
        )}
      </Row>
    </Div>
  );
}
