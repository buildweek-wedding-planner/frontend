import React from "react";
import Moment from "react-moment";
import { Card, Divider, Grid, Icon, Image, Modal, Segment } from "semantic-ui-react";

const SinglePost = ({ post }) => {
  return (
    <Segment raised className="spacer">
      <Grid columns={2} stackable textAlign="center" className="newPost">
        <Grid.Column>
          <Card raised centered>
            <Card.Content>
              <Modal basic centered={true} closeIcon trigger={<Image className="cursor" src={post.item_photo} alt={post.couple_name} />}>
                <Modal.Content image>
                  <Image src={post.item_photo} alt={post.couple_name} />
                </Modal.Content>
              </Modal>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Divider vertical>
          <Icon name="circle outline" />
        </Divider>
        <Grid.Column>
          <Card raised centered>
            <Card.Content>
              <Card.Header as="h2">{post.couple_name}</Card.Header>
              <Card.Meta>
                <Moment format="MMMM DD, YYYY">{post.wedding_date}</Moment>
              </Card.Meta>
              <Card.Description>
                A {post.wedding_theme.toLowerCase()} theme in {post.wedding_location} at [venue]
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>An event by [Wedding Planner]</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Meta>Photography by {post.wedding_photographer}</Card.Meta>
              <Card.Meta>Catering by [caterer]</Card.Meta>
              <Card.Meta>Music by [DJ]</Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default SinglePost;
