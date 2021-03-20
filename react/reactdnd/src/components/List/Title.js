import { InputBase, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
const Title = ({ title }) => {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) => ({
    editableTitle: {
      flexGrow: 1,
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    editableTitleContainer: {
      margin: theme.spacing(1),
      display: "flex",
    },
    input: {
      margin: theme.spacing(1),
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            value={title}
            autoFocus
            inputProps={{ className: classes.input }}
            fullWidth
            onBlur={() => setOpen(!open)}></InputBase>
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}>
            {title}
          </Typography>
          <MoreHoriz></MoreHoriz>
        </div>
      )}
    </div>
  );
};

export default Title;
