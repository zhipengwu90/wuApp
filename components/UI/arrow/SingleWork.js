import React from "react";
import classes from "./SingleWork.module.css";
import Image from "next/image";
import Link from "next/link";
const SingleWork = () => {
  return (
    <div className={classes.cardBox}>
      <Image
        className={classes.workPic}
        src="/images/works/1.jpg"
        alt="work"
        fill
      />
      <div className={classes.corner}>
        <Link href="/work">
          <Image src="/images/github.png" alt="github" width={58} height={34} />
        </Link>
        <Link href="/work">
          <Image src="/images/demo.png" alt="demo" width={58} height={35} />
        </Link>
      </div>
    </div>
  );
};

export default SingleWork;
