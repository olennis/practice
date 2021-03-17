import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "./Card";
const List = () => {
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
        <Title></Title>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <div></div>
      </Paper>
    </div>
  );
};

export default List;
