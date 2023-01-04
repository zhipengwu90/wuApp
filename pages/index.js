import { useState } from 'react';
import Heroes from '../components/Layout/Heroes';
import HomeContent from '../components/PageContent/HomeContent';
import Arrow from '../components/UI/arrow/Arrow';

function HomePage(props) {



  return (
    <>
      <Heroes />


      <div id="sectionId1" className='container containerVH'>
        content 1
      </div>
      <div id="sectionId2" className='container containerVH'>
        content 2
      </div>
    </>

  )
};

export default HomePage;  