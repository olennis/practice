import { Collapse, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import InputCard from "./InputCard";

const InputContainer = () => {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) => ({
    addCard: {
      padding: theme.spacing(1, 1, 1, 2),
      margin: theme.spacing(0, 1, 1, 1),
      background: "#EBECF0",

      "&:hover": {
        backgroundColor: fade("#000", 0.25),
      },
    },
    root: {
      marginTop: theme.spacing(2),
      border: "none",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen}></InputCard>
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}>
          <Typography>+ Add a card</Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;
