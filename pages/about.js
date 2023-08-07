import classes from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";
import github from "../public/images/github.svg";
import linkedin from "../public/images/linkedin.svg";
function About(props) {
  return (
    <div className="container">
      <Head>
        <title>About Wu</title>
        <meta name="description" content="About page" />
      </Head>
      <div className={classes.box}>
        <div className={classes.title}>
          <h1>About Me</h1>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.myCard}>
            {/* <Image
              src={`/images/heroes_background.JPG`}
              alt="background"
              width={400}
              height={240}
              quality={75}
            /> */}
            <div className={classes.cardItem}>
              <Image
                className={classes.myImage}
                src={`/images/logoCircle.png`}
                alt="logoCircle"
                width={100}
                height={100}
              />
              <div className={classes.cardText}>
                <h4>ZHPENG WU</h4>
                <div className={classes.cardButton}>
                  <a href="https://github.com/zhipengwu90">
                    <Image src={github} alt="github" width={35} height={35} />
                  </a>
                  <a href="https://www.linkedin.com/in/zhipengwu90/">
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      width={35}
                      height={35}
                    />
                  </a>
                </div>
                <div className={classes.cardSentence}>
                  <p>
                    Every great developer you know got there by solving problems
                    they were unqualified to solve until they actually did it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.aboutText}>
            <p>
              Greetings and a warm welcome to the ever-evolving world of 🧑‍💻 web
              development ! 🌟 I'm thrilled to introduce myself and share my
              passion ❤️‍🔥 for crafting digital experiences that captivate users
              and leave a positive impact on the web community.
            </p>
            <br />
            <p>
              One of my greatest joys in web development is working with React
              and React Native. The power and flexibility these frameworks offer
              in building dynamic and interactive user interfaces never cease to
              amaze me. Whether it's a responsive web application or a mobile
              app that brings ideas to life, React and React Native have been my
              go-to companions on this coding adventure. 🚀
            </p>
            <br />
            <p>
              As I progress on this journey 🚗, I've recognized the significance
              of embracing new technologies and trends. Recently, I've been
              diving deep into the world of TypeScript. The added benefits of
              static typing and code maintainability have already started to
              improve the quality of my work.
            </p>
            <br />
            <p>
              Beyond coding, I am a firm believer in lifelong learning 📚. I'm
              fueled by the curiosity to explore emerging technologies and
              innovative approaches that shape the digital landscape. Staying
              up-to-date with industry best practices is vital to provide
              cutting-edge solutions to modern challenges . I'm always on the
              lookout for exciting opportunities to enhance my abilities and
              push the boundaries of what I can achieve. 🌌
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
