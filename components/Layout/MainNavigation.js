import Link from "next/link";
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const router = useRouter();
    console.log(router);
    return (
        <header className={`${classes.header}  ${classes.container}`}>
            <div className={classes.logo}>
                <Link href ="/"><Image src={`/images/logo.png`} alt='logo' width={100} height={52} /></Link></div>
            <nav>
                <ul>
                    <li>
                        <Link href="/" className= {router.asPath ==='/'? classes.active: ''}>HOME</Link>
                    </li>
                    <li>
                        <Link href="/work" className= {router.asPath ==='/work'? classes.active: ''} >WORK</Link>
                    </li>
                    <li>
                        <Link href="/snippets" className= {router.asPath ==='/snippets'? classes.active: ''} >SNIPPETS</Link>
                    </li>
                    <li>
                        <Link href="/about" className= {router.asPath ==='/about'? classes.active: ''} >ABOUT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
