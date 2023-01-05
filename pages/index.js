import { useState } from 'react';
import Heroes from '../components/Layout/Heroes';
import Arrow from '../components/UI/arrow/Arrow';
import HomeSection1 from '../components/PageContent/HomeSection1';

function HomePage(props) {



  return (
    <>
      <Heroes />


      <div id="sectionId1" className='container containerVH'>
        <HomeSection1/>
      </div>
      <div id="sectionId2" className='container containerVH'>
        
      </div>
    </>

  )
};

export default HomePage;  