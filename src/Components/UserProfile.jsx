import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../Context/UserContext";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const UserProfile = () => {
  const [user, setUser] = useContext(UserContext);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    document.title = "User Profile";
  }, []);

  console.log(user);
  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={user.photo}
            title={user.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {user.name}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
              {user.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default UserProfile;

const Container = styled.div`
  width: 100%;
  height: 80%;
  min-height: 700px;
  display: grid;
  place-items: center;
`;
