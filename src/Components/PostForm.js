import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Divider, Grid, Icon } from "semantic-ui-react";

const PostText = ({ touched, errors, status }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (status) {
      setPost([...post, status]);
    }
  }, [status]);

  return (
    <div className="newPost">
      <Grid.Column className="newPost__area">
        <Card raised centered>
          <Card.Content>
            <Icon name="image outline" size="massive" />
          </Card.Content>
        </Card>
      </Grid.Column>
      <Divider vertical>
        <Icon name="circle outline" />
      </Divider>
      <Grid.Column className="newPost__area">
        <Card raised centered>
          <Card.Content>
            <Form className="newPost__form">
              <Field className="newPost__field" component="input" type="text" name="couple_name" placeholder="Couple" />
              <Field className="newPost__field" component="input" type="text" name="wedding_location" placeholder="Location" />
              <Field className="newPost__field" component="input" type="text" name="wedding_theme" placeholder="Theme" />
              <Field className="newPost__field" component="input" type="text" name="wedding_photographer" placeholder="Photographer" />
              <Button type="submit" content="Submt" />
              <Button type="reset" content="Reset" />
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ couple_name, wedding_location, wedding_theme, wedding_photographer }) {
    return {
      couple_name: couple_name || "",
      wedding_location: wedding_location || "",
      wedding_theme: wedding_theme || "",
      wedding_photographer: wedding_photographer || ""
    };
  },
  validationSchema: Yup.object().shape({
    couple: Yup.string(),
    venue: Yup.string(),
    location: Yup.string(),
    theme: Yup.string(),
    photographer: Yup.string(),
    videographer: Yup.string(),
    caterer: Yup.string(),
    dj: Yup.string()
  }),
  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(resolve => {
        console.log("submit post resolve > ", resolve);
        setStatus(resolve.data);
        resetForm();
      })
      .catch(error => {
        console.log("submit post error > ", error);
      });
  }
})(PostText);
