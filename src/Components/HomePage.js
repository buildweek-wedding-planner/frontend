import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

import SinglePost from "./SinglePost";

const HomePage = (props) => {
  
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://lambda-wedding-planner.herokuapp.com/api/posts/all")
      .then(resolve => setUserPost(resolve.data))
      .catch(error => console.log("omuhgawd > ", error));
  }, []);

  return (
    
    <Container textAlign="center">
      {props.user.map(user =>{
        return <h4 key={user.id}>hi {user.firstName}</h4>
      })}
      {userPost.map(post => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </Container>
  );
};

export default HomePage;
