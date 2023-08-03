import React from "react";
import classes from "./SingleWork.module.css";
import Image from "next/image";
import Link from "next/link";
const SingleWork = (props) => {
  const { github, demo, img, name, desc } = props.myLink;

  return (
    <div className={classes.cardBox}>
      <div className={classes.backdrop}></div>
      <Image className={classes.workPic} src={img} alt="work" fill />

      <div className={classes.corner}>
        {github && (
          <Link href={github}>
            <Image
              src="/images/github.png"
              alt="github"
              width={58}
              height={34}
            />
          </Link>
        )}
        {demo && (
          <Link href={demo}>
            <Image src="/images/demo.png" alt="demo" width={58} height={35} />
          </Link>
        )}
      </div>
      <div className={classes.workInfo}>
        <h3 className={classes.workName}>{name}</h3>
        <div className={classes.workDesc}>{desc}</div>
      </div>
    </div>
  );
};

export default SingleWork;
