import React from 'react';

import Navbar from '../Navbar/Navbar';
import Landing from './Landing';
import Clients from './Clients';
import Stats from './Stats';
import Artists from './Artists';
import Socialmedia from './Socialmedia';
import Footer from '../Footer/Footer'
import Newsletter from '../Newsletter/Newsletter';
import Band from './Band';


function Home() {




  return (
    <>    
      <div className="sticky top-0 z-50">
      <Navbar />     
      </div>     
      <Landing />   
      <Clients />
      <Artists />    
      <Stats />
      <Band/>      
      <Socialmedia />
      <Newsletter />
       <Footer/>
       
    </>
  );
}

export default Home;









