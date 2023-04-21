import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';


function Layout(props) {

  return (
    <>
      <MainNavigation />
  
      <div>{props.children}</div>
    </>
  );
}

export default Layout;
