import React, { useState } from "react";
import { Button, Grid, Modal, Segment } from "semantic-ui-react";
import PostForm from "./PostForm";

const PostPage = props => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Modal className="newPostModal" centered closeIcon open={isShowing} onOpen={toggle} trigger={<Button content={"Make a new post"} />}>
      <Modal.Content>
        <Segment raised>
          <Grid columns={2} stackable textAlign="center">
            <PostForm toggle={toggle} />
          </Grid>
        </Segment>
      </Modal.Content>
    </Modal>
  );
};

export default PostPage;
