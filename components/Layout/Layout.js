import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';


function Layout(props) {

  return (
    <>
      <MainNavigation />
  
      <div className={classes.main}>{props.children}</div>
    </>
  );
}

export default Layout;
