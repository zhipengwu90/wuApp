import React from "react";
import SingleWork from "../UI/singleWork/SingleWork";
import classes from "./WorkSectionAll.module.css";
import WorkData from "../Data/WorkData.json";
console.log(WorkData);

const WorkSectionAll = () => {
  return (
    <div>
      <div className={classes.workWrap}>
        {WorkData.map((work) => (
          <SingleWork myLink={work} key={work.id} />
        ))}
      </div>
    </div>
  );
};

WorkSectionAll.propTypes = {};

export default WorkSectionAll;
