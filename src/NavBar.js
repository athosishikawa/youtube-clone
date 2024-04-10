import React, { useState } from 'react';

function NavBar() {
  const [searchInput, setSearchInput] = useState('');
  const searchLink = 'https://www.youtube.com/results?search_query=';

  const handleSearch = () => {
    if (searchInput.length > 0) {
      window.location.href = searchLink + searchInput;
    }
  };

  return (

    <nav className = 'navbar'>

      <div className = 'toggle-btn'>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <img src = "./logo.png" className = "logo" alt = "youtube logo"/>


      <div className = "search-box">
        <input type = "text" value = {searchInput} className = "search-bar" placeholder = "Pesquisar" onChange={(e) => setSearchInput(e.target.value)}/>
        <button className = "search-btn" onClick={handleSearch}><img src = "./search.png" alt = "botao pesquisar"/></button>
      </div> 

      <div className = "user-options"> 
      <img src="./video.png" className = "icon" alt = ""/>
      <img src="./grid.png" className = "icon" alt = ""/>
      <img src="./bell.png" className = "icon" alt = ""/>
      <div className = "user-dp">
        <img src="./profile-pic.jpg" className = "icon" alt = ""/>

      </div>
      </div>

    </nav>
    
  );
}

export default NavBar;


