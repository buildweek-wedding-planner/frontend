import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { withFormik, Form, Field} from "formik";

import axios from "axios";
import * as Yup from "yup";
import { Card, Button, Modal } from "semantic-ui-react";

function Onboarding(props){
  const { values, errors, touched, isSubmitting} = props;

  const token = localStorage.getItem("token");

  if (token) {
    console.log(token)
    return <Redirect to="/dashboard" />;
  }
  return (

    <Modal basic centered closeIcon trigger={<Button content={"Sign Up"} />}>
      <Modal.Content>
        <Card raised centered>
          <Card.Content>
            <Card.Header as="h2" textAlign={"center"}>
              Sign Up
            </Card.Header>
            <Card.Description textAlign={"center"}>
            <Form className="onboarding">
              <Field className="signUp" type="username" name="username" placeholder="Your name is your Username" />
              <Field className="signUp" type="password" name="password" placeholder="password" />
              <Field className="signUp" type="email" name="email" placeholder="email@example.com" />
              <Field className="signUp" type="location" name="location" placeholder="location" />
              {/* <label>
                <Field type="checkbox" name="tOS" checked={status.tOS} />
                  Accept Terms of Services and Privacy Statments
              </label> */}
              <Button type="submit" disabled={isSubmitting} content="Submit" />
            </Form>
            </Card.Description>
          </Card.Content>
        </Card>
      </Modal.Content>
    </Modal>

    
  )
};


const FormikOnboarding = withFormik({
  mapPropsToValues({ username, password, email, location}){
    return{
      username: username || "",
      password: password || "",
      email: email || "",
      location: location || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is NOT valid")
      .required("email is REQUIRED"),

    username: Yup.string()
      .required("Must enter name"),

    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("password is REQUIRED")
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
    axios
      .post("https://lambda-wedding-planner.herokuapp.com/api/auth/register", values)
      .then(res=>{

        localStorage.setItem("token", res.data.token);
        setSubmitting(false);

      })
      .catch(err => {
        console.log("Sign Up error > ", err);
        resetForm();
      });
  }
})(Onboarding);

export default FormikOnboarding;
