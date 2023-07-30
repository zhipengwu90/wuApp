import React from "react";
import classes from "./HomeSection2.module.css";
import SingleWork from "../UI/singleWork/SingleWork";
import Link from "next/link";
import WorkData from "../Data/WorkData.json";


const HomeSection2 = () => {
  return (
    <div>
      <div className={classes.lineTitle}>
        <div className={classes.line}>
          <hr />
        </div>
        <div className={classes.title}>
          <h2>My Works</h2>
        </div>
        <div className={classes.line}>
          <hr />
        </div>
      </div>
      <div className={classes.workWrap}>
        {WorkData.map((work) => (
          <SingleWork myLink={work} key={work.id} />
        ))}
        {/* <SingleWork myLink={hands_on} />
        <SingleWork myLink={chatbot} />
        <SingleWork myLink={VFriend} /> */}
      </div>
      <div className={classes.moreButton}>
        <Link href="/work" className={classes.btn}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default HomeSection2;
