import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Card, Button, Modal } from "semantic-ui-react";

const Login = props => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Modal basic centered closeIcon trigger={<Button content={"Sign In"} />}>
      <Modal.Content>
        <Card raised centered>
          <Card.Content>
            <Card.Header as="h2" textAlign={"center"}>
              Login
            </Card.Header>
            <Card.Description textAlign={"center"}>
              <Form className="loginForm">
                <Field component="input" type="text" name="email" placeholder="Email" className="loginForm__field" />
                <Field component="input" type="password" name="password" placeholder="Password" className="loginForm__field" />
                <Button type="submit" content="Submit" />
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
      </Modal.Content>
    </Modal>
  );
};

export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Not a valid email")
      .required("Required"),
    password: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm, history }) {
    axios
      .post("https://reqres.in/api/login", values)
      .then(resolve => {
        localStorage.setItem("token", resolve.data.token);
        history.push("/dashboard");
      })
      .catch(error => {
        console.log("login error > ", error);
        resetForm();
      });
  }
})(Login);

// https://lambda-wedding-planner.herokuapp.com/api/auth/login
