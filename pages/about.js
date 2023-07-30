import classes from "../styles/about.module.css";
import Image from "next/image";
function About(props) {
  return (
    <div className="container">
      <div className={classes.box}>
        <div className={classes.logoCircle}>
          <Image
            src={`/images/logoCircle.png`}
            alt="logoCircle"
            width={100}
            height={100}
          />
        </div>

        <div>
          <p>
            Hello and welcome to the world of web development 🧑‍💻! It's great to
            meet you.
          </p>
          <br />
          <p>
            As a new web developer, I am embarking on an exciting journey that
            will allow me to create and build unique and engaging websites 🖥 and
            applications 📲 for a wide range of users.
          </p>
          <br />
          <p>I am always curious 🤔 about new technology and the WORLD 🌎 .</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
