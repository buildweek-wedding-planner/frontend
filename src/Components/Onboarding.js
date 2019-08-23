import React, { useState, useEffect } from "react";
import { Form, Field, withFormik} from "formik";
import  * as Yup from "yup";
import axios from "axios";

const Onboarding = ({ errors, touched, values, status }) =>{
    
    const [ user, setUser] = useState([]); //sets the state of the user

    useEffect(() =>{
      if(status) {
        setUser([...user, status]);
      }
    }, [status])

    return(

        <div className="user-form">
            <Form>
                <Field 
                    component="input"
                    type="text"
                    name="name"
                    placeholder="name"
                />{touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                <Field
                    component="input"
                    type="text"
                    name="email"
                    placeholder="JohnDoe@example.com"
                />{touched.email && errors.email && (<p className="error">{errors.email}</p>)}
                <Field 
                    component="input"
                    type="password"
                    name="password"
                    placeholder="password"
                />{touched.password && errors.password && (<p className="error">{errors.password}</p>)}
                <label className="check-box">
                <Field 
                    type="checkbox"
                    name="tOS" //tOS=terms of services
                    checked={values.tOS}
                />Terms of Services
                </label>
                <button> Submit </button>
            </Form>
            {user.map(user => (
        <p key={user.id}>{user.name}</p> //testing
      ))}
        </div>
    );
};

const fHOC = withFormik({
    mapPropsToValue({ name, email, password, tOS }){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            tOS: tOS || false 
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("must enter a name"),
        email: Yup.string().required("must enter a valid email"),
        password: Yup.string().required()
    }),
    handleSubmit(values, { setStatus, resetForm }) {
      axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
          console.log("handleSubmit: then: res: ", res);
          setStatus(res.data);
          resetForm();
        })
        .catch(err => console.error("handleSubmit: catch: err: ", err));
    }
});

const OnboardingWithFormik = fHOC(Onboarding); //formik Higher Order Component

export default OnboardingWithFormik;