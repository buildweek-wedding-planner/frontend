import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
import { Form, Field, withFormik } from "formik";
// import { Persist } from "formik-persist";
import * as Yup from "yup";
import { Card, Button } from "semantic-ui-react";

const Login = ({ touched, errors, status }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
      setPassword([...password, status]);
    }
  }, [user, password, status]);

  return (
    <Card raised centered className="loginCard">
      <Card.Content>
        <Card.Header as="h2" textAlign={"center"}>
          Login
        </Card.Header>
        <Card.Description textAlign={"center"}>
          <Form className="loginForm">
            <Field component="input" type="text" name="username" placeholder="User Name" className="loginForm__field" />
            {touched.username && errors.username && <i>{errors.username}</i>}
            <Field component="input" type="password" name="password" placeholder="Password" className="loginForm__field" />
            {touched.password && errors.password && <i>{errors.password}</i>}
            <Button content="Submit" type="submit" />
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username"),
    password: Yup.string().required("Please enter a password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values);
    axios
      .post("https://reqres.in/api/users", values)
      .then(resolve => {
        console.log("login resolve > ", resolve);
        resetForm();
        resolve.status === 201 ? console.log("201 success") : console.log("201 failure");
      })
      .catch(error => {
        console.log("login error > ", error);
        resetForm();
      });
  }
})(Login);

// https://lambda-wedding-planner.herokuapp.com/api/auth/login
// sessionStorage.setItem("reqres.in id", resolve.data.id);
