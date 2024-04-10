import React, { useEffect, useRef } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import HarburguerMenu from './HamburguerMenu.js';
import Filters from './Filters.js';
import VideosFeed from './VideosFeed.js';

function App() {

  
  return (
    <>

        <NavBar/>

        <HarburguerMenu/>

        <Filters/>

        <VideosFeed/>

        
    </>

  );

  

}


export default App;
