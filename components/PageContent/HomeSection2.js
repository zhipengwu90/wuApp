import React from "react";
import classes from "./HomeSection2.module.css";
import SingleWork from "../UI/singleWork/SingleWork";
import Link from "next/link";

const hands_on = {
  github: "https://github.com/zhipengwu90/Hands_On_app",
  demo: "",
  img: "/images/works/hands_on.png",
};
const chatbot = {
  github: "https://github.com/zhipengwu90/Chatbot",
  demo: "https://www.wuapp.app/",
  img: "/images/works/chatbot.png",
};
const VFriend = {
  github: "https://github.com/zhipengwu90/VFriend",
  demo: "",
  img: "/images/works/VFriend.png",
};

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
        <SingleWork myLink={hands_on} />
        <SingleWork myLink={chatbot} />
        <SingleWork myLink={VFriend} />
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
