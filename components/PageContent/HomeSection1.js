import classes from './HomeSection1.module.css';
import Image from 'next/image';
import Link from "next/link";
import { useRouter } from 'next/router';
function HomeSection1(props) {
    const router = useRouter();
    return (
        <div className={classes.wrap}>
            <div className={classes.box1}>
                <h4>The programming language involved in my projects.</h4>
                <div className={classes.fullStack}>
                    <Image src={`/images/fullStack.png`} alt='fullStack' width={500} height={520} />
                    <div className={classes.myWork}>
                        <Link href="/work">View My Projects</Link>
                    </div>
                </div>

            </div>
            <div className={classes.box2}>
                <div className={classes.logoCircle}>
                    <Image src={`/images/logoCircle.png`} alt='logoCircle' width={100} height={100} />
                </div>

                <div>
                    <p>
                    Hello and welcome to the world of web development 🧑‍💻! It's great to meet you.
                    </p>
                    <br/>
                    <p>
                    As a new web developer, I am embarking on an exciting journey that will allow me to create and build unique and engaging websites 🖥 and applications 📲 for a wide range of users.
                    </p>
                    <br/>
                    <p>
                    I am always curious 🤔 about new technology and WORLD 🌎 .
                    </p>
                    <br/>
                    <div className={classes.aboutMe}>
                        <Link href="/about" >
                                        About Me</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeSection1;