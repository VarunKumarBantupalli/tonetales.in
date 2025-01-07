import React from 'react';

import Navbar from '../Navbar/Navbar';

import Landing from './Landing';
import Info from './Info';
import Clients from './Clients';

import Stats from './Stats';
import Services from './Services';
import Artists from './Artists';

import Socialmedia from './Socialmedia';

function Home() {




  return (
    <>
      
     
      <div className="sticky top-0 z-50">
        <Navbar />
        
      </div>     
      <Landing />
        <Info /> 
      <Clients />
      {/* <Services />   */}
       <Stats />
       <Artists />
      <Socialmedia /> 
    </>
  );
}

export default Home;












/*
<div className="space-y-6 text-center">

 Subtle Gold 
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-dark text-4xl font-bold">
  Subtle Gold Gradient
</h1>

 Elegant Bronze 
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-bronze-start to-bronze-end text-4xl font-bold">
  Elegant Bronze Gradient
</h1>

 Champagne Gold 
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-champagne-start to-champagne-end text-4xl font-bold">
  Champagne Gold Gradient
</h1>

 Golden Sand 
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sand-start to-sand-end text-4xl font-bold">
  Golden Sand Gradient
</h1>

 Amber Sunset 
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-amber-start to-amber-end text-4xl font-bold">
  Amber Sunset Gradient
</h1>
</div>

*/
