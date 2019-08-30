import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

function Onboarding({ values, errors, touched, isSubmitting, status }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status, user]);

  return (
    <Form className="onboarding">
      <Field className="signUp" type="email" name="email" placeholder="email@example.com" />
      <Field className="signUp" name="firstName" placeholder="First Name" />
      <Field className="signUp" name="lastName" placeholder="Last Name" />
      <Field className="signUp" type="password" name="password" placeholder="password" />
      <Field className="signUp" component="select" name="service">
        <option value="trad">Traditional</option>
        <option value="mod">Modern</option>
        <option value="Custom">Custom</option>
      </Field>
      tell us about yourself:
      <Field className="signUp des" type="text" name="abtMe" />
      <label>
        <Field className="signUp" type="checkbox" name="tos" checked={values.tos} />
        Accept TOS
      </label>
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </Form>
  );
}

const FormikOnboarding = withFormik({
  mapPropsToValues({ email, firstName, lastName, password, tos, service, abtMe }) {
    return {
      email: email || "",
      firstName: firstName || "",
      lastName: lastName || "",
      password: password || "",
      tos: tos || false,
      service: service || "trad",
      abtMe: abtMe || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email is NOT valid")
      .required("email is REQUIRED"),
    firstName: Yup.string().required("Must enter first name"),
    lastName: Yup.string().required("Must enter last name"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required("password is REQUIRED")
  }),
  handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
    console.log(values);
    axios.post("https://reqres.in/api/users", values).then(res => {
      console.log(res);
      setStatus(res);
      setSubmitting(false);
    });
  }
})(Onboarding);

export default FormikOnboarding;
