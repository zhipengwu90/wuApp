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


    const navToggle = isToggle ? classes.navStyleToggle : '';
    const navHamburger = !isToggle ? <svg className={classes.hamburgerSVG} viewBox="0 0 100 80" width="25" height="25">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
    </svg> : <svg className={classes.closeSVG} viewBox="0 0 20 20">
        <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
    </svg>;

    return (
        <header className={`${classes.header}  ${classes.container}`}>

            <div className={classes.logo}>
                <Link href="/"><Image src={`/images/logo.png`} alt='logo' width={100} height={52} /></Link></div>


            <button onClick={toggleHandler} className={classes.hamburger}>

        {navHamburger}

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
