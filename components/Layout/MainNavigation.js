import Link from "next/link";
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './MainNavigation.module.css';
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";


function MainNavigation() {
    const nodeRef = useRef(null);

    const [isToggle, setIsToggle] = useState(false);
    const router = useRouter();

    const toggleHandler = () => {
        setIsToggle(!isToggle);
    }

    const toggleClose = () => {
        setIsToggle(false);
    }


    const navToggle = isToggle ? classes.navStyleToggle : '' ;

    return (
        <header className={`${classes.header}  ${classes.container}`}>
            <div className={classes.logo}>
                <Link href="/"><Image src={`/images/logo.png`} alt='logo' width={100} height={52} /></Link></div>
            <button onClick={toggleHandler} className={classes.hamburger}>
                <svg className={classes.hamburgerSVG} viewBox="0 0 100 80" width="25" height="25">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>

            </button>

            <nav className={`${classes.navStyle} ${navToggle}`}>
       
                        <ul>
                            <li>
                                <Link href="/" onClick={toggleClose} className={router.asPath === '/' ? classes.active : ''}>HOME</Link>
                            </li>
                            <li>
                                <Link href="/work" onClick={toggleClose} className={router.asPath === '/work' ? classes.active : ''} >WORK</Link>
                            </li>
                            <li>
                                <Link href="/snippets" onClick={toggleClose} className={router.asPath === '/snippets' ? classes.active : ''} >SNIPPETS</Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={toggleClose} className={router.asPath === '/about' ? classes.active : ''} >ABOUT</Link>
                            </li>
                        </ul>
            </nav>

        </header>
    );
}

export default MainNavigation;
