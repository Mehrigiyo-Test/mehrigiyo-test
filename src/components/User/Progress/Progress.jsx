import React from "react";
import style from "./Progress.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
const Progress = () => {
  return (
    <div className={style.progressWrapper}>
     <div className={style.progressBox}>
     <CircularProgress size={100} color="inherit" />
     </div>
    </div>
  );
};

export default Progress;
