import React from 'react'
import axios from 'axios'
import { Form, Formik, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import { Card, Button, Modal } from 'semantic-ui-react'

const Login = props => {
  const validationSchema = Yup.object().shape({
    email: Yup.string(),
    password: Yup.string()
  })

  return (
    <Modal
      basic
      centered
      closeIcon
      trigger={<Button content={'Sign In'} />}>
      <Modal.Content>
        <Card raised centered>
          <Card.Content>
            <Card.Header as="h2" textAlign={"center"} >Login</Card.Header>
            <Card.Description textAlign={'center'} >
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm, setStatus, history }) => {
                  axios
                    .post("https://reqres.in/api/users", values)
                    .then(resolve => {
                      console.log('login resolve > ', resolve)
                      console.log('login props > ', props)
                      console.log('history > ', props.history)
                      props.history.push('/dashboard')
                    })
                    .catch(error => {
                      console.log('login error > ', error)
                    })
                }}>
                {({ isSubmitting, errors, touched }) => (
                  <Form className='loginForm'>
                    <Field component="input" type="text" name="email" placeholder="email" className="loginForm__field" />
                    <Field component="input" type="text" name="password" placeholder="password" className="loginForm__field" />
                    <Button type="submit" content="Submit" />
                  </Form>
                )}
              </Formik>
            </Card.Description>
          </Card.Content>
        </Card>
      </Modal.Content>
    </Modal>
  );

}

export default Login