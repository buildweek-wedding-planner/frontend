import React from "react";
import { Button, Grid, Modal, Segment } from "semantic-ui-react";
import PostText from "./PostForm";

const PostPage = () => {
  return (
    <Modal className="newPostModal" centered closeIcon trigger={<Button content={"Make a new post"} />}>
      <Modal.Content>
        <Segment raised>
          <Grid columns={2} stackable textAlign="center">
            <PostText />
          </Grid>
        </Segment>
      </Modal.Content>
    </Modal>
  );
};

export default PostPage;
