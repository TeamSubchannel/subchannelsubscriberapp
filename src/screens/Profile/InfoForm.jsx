import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { Text, Row, Input, Label, UserWarn, Button } from "../../theme/index";

const Div = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1em 0;
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

export default function InfoForm({
  values,
  handlesubmit,
  editdetails,
  editdetailstype
}) {
  return (
    <Div>
      <Hr title="Info" />
      <Formik
        enableReinitialize
        initialValues={values}
        validate={values => {
          let errors = {};

          if (!values.email) {
            errors.email = "An email is required";
          }

          if (!values.password) {
            errors.password = "A password is required";
          }

          return errors;
        }}
        onSubmit={values => {
          console.log(values);
        }}
        render={({
          values,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
          touched
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row alignitems="center" justifycontent="space-between">
              <Label notactive={editdetailstype === "email" ? false : true}>
                Email
                {touched.email &&
                  errors.email && (
                    <UserWarn left="4em">
                      <Text color="red" fontsize="1em">
                        {errors.email}
                      </Text>
                    </UserWarn>
                  )}
                <Input
                  notactive={editdetailstype === "email" ? false : true}
                  value={values.email}
                  name="email"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin=".8em 0"
                />
              </Label>
              {editdetailstype === "" && (
                <StyledText primary id="email" onClick={editdetails}>
                  Edit Email
                </StyledText>
              )}
              {editdetailstype === "email" && (
                <Row alignitems="center">
                  <StyledText onClick={editdetails}>Cancel</StyledText>
                  <Button save type="submit">
                    Save
                  </Button>
                </Row>
              )}
            </Row>
            <Row alignitems="center" justifycontent="space-between">
              <Label notactive={editdetailstype === "password" ? false : true}>
                Password
                {touched.password &&
                  errors.password && (
                    <UserWarn left="6em">
                      <Text color="red" fontsize="1em">
                        {errors.password}
                      </Text>
                    </UserWarn>
                  )}
                <Input
                  notactive={editdetailstype === "password" ? false : true}
                  value={values.password}
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin=".8em 0"
                />
              </Label>
              {editdetailstype === "" && (
                <StyledText primary id="password" onClick={editdetails}>
                  Edit Password
                </StyledText>
              )}
              {editdetailstype === "password" && (
                <Row alignitems="center">
                  <StyledText onClick={editdetails}>Cancel</StyledText>
                  <Button save type="submit">
                    Save
                  </Button>
                </Row>
              )}
            </Row>
          </Form>
        )}
      />
    </Div>
  );
}
