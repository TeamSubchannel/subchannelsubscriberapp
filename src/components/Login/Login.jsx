import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { USER_LOGIN_SUCCESS, userLogin } from "./redux/actions";
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

const Login = props => (
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
      onSubmit={(values, { setSubmitting, setErrors }) => {
        props
          .userLogin({ email: values.email, password: values.password })
          .then(action => {
            if (action.type === USER_LOGIN_SUCCESS) {
              setSubmitting(false);
              localStorage.setItem("authorization", action.authToken);
              localStorage.setItem("appUser", JSON.stringify(action.appUser));
              props.history.push("/");
            } else {
              setSubmitting(false);
              setErrors({ error: action.response.data });
            }
          })
          .catch(err => {
            setSubmitting(false);
            console.log("Error Logging in", err);
          });
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
            Login
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
              LOGIN
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

            <Text
              styled
              id="signup"
              onClick={props.handleclick}
              color="#019095"
            >
              Signup
            </Text>
          </Row>
        </form>
      )}
    />
  </div>
);

export default withRouter(
  connect(
    null,
    { userLogin }
  )(Login)
);
