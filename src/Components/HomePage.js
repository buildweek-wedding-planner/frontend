import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

import SinglePost from "./SinglePost";

const HomePage = () => {
  const [userPost, setUserPost] = useState([]);
  
  
  useEffect(() => {
    axios
      .get("https://lambda-wedding-planner.herokuapp.com/api/posts/all")
      .then(resolve => setUserPost(resolve.data))
      .catch(error => console.log("get posts error > ", error));
  }, []);

  return (
    <Container textAlign="center">
      {userPost.map(post => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </Container>
  );
};

export default HomePage;
