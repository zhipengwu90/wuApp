import Link from "next/link";

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>WU</div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/work">WORK</Link>
                    </li>
                    <li>
                        <Link href="/snippets">SNIPPETS</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
