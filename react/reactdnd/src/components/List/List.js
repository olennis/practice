import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "./Card";
import InputContainer from "./InputContainer";
const List = ({ list }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "300px",
      backgroundColor: "#EBECF0",
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline></CssBaseline>
        <Title title={list.title}></Title>
        {list.cards.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
        <InputContainer listId={list.id}></InputContainer>
      </Paper>
    </div>
  );
};

export default List;
