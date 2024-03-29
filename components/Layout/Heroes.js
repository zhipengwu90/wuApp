import classes from './Heroes.module.css';
import Image from 'next/image';
import Arrow from '../UI/arrow/Arrow'
function Heroes() {
    return (
        <div className={classes.heroes}>
            <span className={classes.helloWorld}>Hello World.</span>
            <div className='container fadeIn'>
                    <div className={classes.heroesWrap}>
                        <div className={classes.mainText}>
                            <span className={classes.wu}>WU.</span>
                            <span className={classes.with}></span>
                            <span className={classes.developer}>Developer</span>
                            <div className={classes.box1}></div>
                            <div className={classes.box2}></div>
                        </div>
                        <div className={classes.heroesImg}>
                            <Image src={`/images/heroes_background.png`} alt='heroImg' width={900} height={900}></Image>
                        </div>
                    </div>
                    <div className={classes.update}>
                        <span className={classes.updateText}>Hello World...</span>
                        <div className={classes.bar}>
                            <div className={classes.barRed}> </div>
                        </div>
                    </div>
                    <Arrow sectionId={1}/>
            </div>
           

        </div>
    )
}

export default Heroes;