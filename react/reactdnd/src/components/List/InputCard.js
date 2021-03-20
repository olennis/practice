import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";

import ClearIcon from "@material-ui/icons/Clear";
import React, { useContext, useState } from "react";
import storeAPI from "../../util/storeAPI";

const InputCard = ({ setOpen, listId }) => {
  const [cardTitle, setCardTitle] = useState("");
  const { addMoreCard } = useContext(storeAPI);
  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle("");
    setOpen(false);
  };
  const handleBlur = () => {
    setOpen(false);
    setCardTitle("");
  };
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
            onChange={handleOnChange}
            onBlur={handleBlur}
            multiline
            fullWidth
            inputProps={{ className: classes.input }}
            value={cardTitle}
            placeholder="enter a title of this card"></InputBase>
        </Paper>
      </div>
      <div>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          Add Card
        </Button>
        <IconButton onClick={handleBlur}>
          <ClearIcon></ClearIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
