import React from "react";
import SingleWork from "../UI/singleWork/SingleWork";
import classes from "./WorkSectionAll.module.css";

const WorkSectionAll = () => {
  const myLink = {
    github: 'https://github.com/zhipengwu90/Hands_On_app',
    demo: "",
  };

  return (
    <div className={classes.box}>
      <div className={classes.workWrap}>
        <SingleWork
          myLink={myLink}
        />

        {/* <SingleWork />
        <SingleWork /> */}
      </div>
    </div>
  );
};

WorkSectionAll.propTypes = {};

export default WorkSectionAll;
