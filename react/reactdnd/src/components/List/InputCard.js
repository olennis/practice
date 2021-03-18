import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import ClearIcon from "@material-ui/icons/Clear";
import React from "react";

const InputCard = ({ setOpen }) => {
  const useStyles = makeStyles((theme) => ({
    card: {
      margin: theme.spacing(0, 1, 1, 1),
      paddingBottom: theme.spacing(4),
    },
    input: {
      margin: theme.spacing(1),
    },
    btnConfirm: {
      background: "green",
      color: "#fff",
      "&hover": {
        background: fade("#5AAC44", 0.25),
      },
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            placeholder="enter a title of this card"></InputBase>
        </Paper>
      </div>
      <div>
        <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>
          Add Card{" "}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon></ClearIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
