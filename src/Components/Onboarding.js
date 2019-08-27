import React, { useState, useEffect } from "react";
import { withFormik, Form, Field} from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Card, Button, Modal } from "semantic-ui-react";

function Onboarding(props){
  const { values, errors, touched, isSubmitting, status } = props;

  useEffect(() => {
    if (status) {
      props.userInfo(status.data);
    }
  },[status]);

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
      <Field className="signUp" name="firstName" placeholder="First Name"/>
      <Field className="signUp" name="lastName" placeholder="Last Name"/>
      <Field className="signUp" type="username" name="username" placeholder="username" />
      <Field className="signUp" type="email" name="email" placeholder="email@example.com" />
      <Field className="signUp" type="password" name="password" placeholder="password" />
      <Field className="signUp" component="select" name="service">
        <option>Wedding Speciality:</option>
        <option value="trad">Traditional</option>
        <option value="mod">Modern</option>
        <option value="Custom">Custom</option>
      </Field>
      Description:
      <Field className="signUp des" type="text" name="abtMe"/>
      Phone Number:
      <Field className="signUp" type="text" name="cntct"/>
      <label>
        <Field type="checkbox" name="tos" checked={values.tos} />
          Accept Terms of Services and Privacy Statments
      </label>
      <button className="suBtn" disabled={isSubmitting} type="submit">Submit</button>
    </Form>
            </Card.Description>
          </Card.Content>
        </Card>
      </Modal.Content>
    </Modal>

    
  )
};

const FormikOnboarding = withFormik({
  mapPropsToValues({ email, firstName, lastName, username, password, tos, service, abtMe, cntct }, props){
    return{
      email: email || "",
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || "",
      tos: tos || false,
      service: service || "",
      abtMe: abtMe || "",
      cntct: cntct || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is NOT valid")
      .required("email is REQUIRED"),
    firstName: Yup.string()
      .required("Must enter first name"),
    lastName: Yup.string()
      .required("Must enter last name"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("password is REQUIRED")
  }),
  handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
    console.log(values);
    axios
      .post("https://reqres.in/api/user", values)
      .then(res=>{
        console.log(res)
        setStatus(res)
        setSubmitting(false);
      })
  }
})(Onboarding);


export default FormikOnboarding;