import React from "react";
import Moment from "react-moment";
import { Card, Image } from "semantic-ui-react";

const SinglePost = ({ post }) => {
  return (
    <Card centered raised>
      <Image src={post.item_photo} alt={post.couple_name} />
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
        <Card.Meta>Photography by {post.wedding_photographer}</Card.Meta>
        <Card.Meta>Catering by [caterer]</Card.Meta>
        <Card.Meta>Music by [DJ]</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Description>Event planning by {post.user_id}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default SinglePost;
