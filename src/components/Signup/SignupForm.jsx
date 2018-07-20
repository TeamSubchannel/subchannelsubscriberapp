import React, { Component } from "react";
import { Formik } from "formik";
import { STAGETWO } from "./Signup";

import {
  Input,
  Button,
  Label,
  Text,
  Title2,
  UserWarn,
  Row,
  Column
} from "../../theme/index";

class SignupForm extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <div>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
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
            navigate(values, STAGETWO);
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Title2 fontsize="2.2em" dark margin=".7em 0 .7em 1em">
                Get started
              </Title2>
              <Column alignitems="center">
                <Row>
                  <Label>
                    Email *
                    {touched.email &&
                      errors.email && (
                        <UserWarn left="4em">
                          <Text color="red" fontsize="1em">
                            {errors.email}
                          </Text>
                        </UserWarn>
                      )}
                    <Input
                      margin=".8em 0"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      border={touched.email && errors.email && "1px solid red"}
                    />
                  </Label>
                </Row>
                <Row>
                  <Label>
                    Password *
                    {touched.password &&
                      errors.password && (
                        <UserWarn left="6em">
                          <Text color="red" fontsize="1em">
                            {errors.password}
                          </Text>
                        </UserWarn>
                      )}
                    <Input
                      margin=".8em 0"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      border={
                        touched.password && errors.password && "1px solid red"
                      }
                    />
                  </Label>
                </Row>
                <Button signup type="submit" disabled={isSubmitting}>
                  NEXT
                  <span>
                    <i className="fa fa-chevron-right" />
                  </span>
                </Button>
              </Column>
              <Row
                alignitems="center"
                padding="0 2em"
                margin=".8em 0"
                justifycontent="space-between"
              >
                <Text>Forgot Password</Text>

                <Text styled id="login" color="#019095">
                  Login
                </Text>
              </Row>
            </form>
          )}
        />
      </div>
    );
  }
}

export default SignupForm;
