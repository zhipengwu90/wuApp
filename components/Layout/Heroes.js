import classes from './Heroes.module.css';
import Image from 'next/image';
import heroesImg from '../../public/images/heroes_background.JPG';
function Heroes() {
    return (
        <div className={classes.heroes}>
            <span className={classes.helloWorld}>Hello World.</span>
            <div className='container'>
                <div className={classes.heroesWrap}>
                    <div className={classes.mainText}>
                        <span className={classes.wu}>WU.</span>
                        <span className={classes.with}>with</span>
                        <span className={classes.developer}>Developer</span>
                        <div className={classes.box1}></div>
                        <div className={classes.box2}></div>
                    </div>
                    <div className={classes.heroesImg}>
                        <Image src={heroesImg} alt='heroImg' width={500} height={290}></Image>
                    </div>
                </div>
                <div className={classes.update}>
                    <span className={classes.updateText}>Updating...</span>
                    <div className={classes.bar}>
                        <div className={classes.barRed}> </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Heroes;