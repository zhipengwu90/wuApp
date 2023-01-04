import classes from './Arrow.module.css';
function Arrow(props) {
    return(

        <section className={classes.arrow}>

        <a href={`#sectionId${props.sectionId}`}><span></span><span></span><span></span>Scroll</a>
    </section>
    )
}



export default Arrow;