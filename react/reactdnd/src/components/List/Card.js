import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const Card = ({ card }) => {
  const useStyles = makeStyles((theme) => ({
    card: {
      padding: theme.spacing(1, 1, 1, 2),
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.card}>{card.title}</Paper>
    </div>
  );
};

export default Card;
