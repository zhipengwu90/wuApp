import Heroes from '../components/Layout/Heroes';
import HomeContent from '../components/PageContent/HomeContent';

function HomePage(props){
  return(
    <>
    <Heroes/>
    <div className='container containerVH'>
      content 1
    </div>
    <div className='container containerVH'>
    content 2
    </div>
    </>
    
  )
};

export default HomePage;  