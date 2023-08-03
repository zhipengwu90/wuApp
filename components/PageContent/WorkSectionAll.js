import React from "react";
import SingleWork from "../UI/singleWork/SingleWork";
import classes from "./WorkSectionAll.module.css";
import WorkData from "../Data/WorkData.json";
import { useState } from "react";

const WorkSectionAll = () => {
  const [filterValue, setFilterValue] = useState("all");
  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
  return (
    <div className={classes.box}>
      <div className={classes.filterBox}>
        <span className={classes.filterTitle}> Sort by</span>
        <select className={classes.filterContent} value={filterValue} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="react">React</option>
          <option value="react native">React Native</option>
          <option value="next.js">Next.js</option>
          <option value="openAI">OpenAI</option>
          <option value="python">Python</option>    <option value="openAI">OpenAI</option>
          <option value="javascript">Javascript</option>
          <option value="typescript">Typescript</option>

        </select>
      </div>
      <div className={classes.workWrap}>
        {WorkData.filter((work) => work.filter.includes(filterValue)).map(
          (work) => (
            <SingleWork myLink={work} key={work.id} />
          )
        )}
      </div>
    </div>
  );
};

WorkSectionAll.propTypes = {};

export default WorkSectionAll;
