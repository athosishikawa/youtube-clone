import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>

      <body>
        <nav class = 'navbar'>

          <div class = 'toggle-btn'>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <img src = "./logo.png" class = "logo" alt = "youtube logo"/>

          <div class = "search-box">
            <input type = "text" class = "search-bar" placeholder = "Pesquisar"/>
            <button class = "search-btn"><img src = "./search.png" alt = "botao pesquisar"/></button>
          </div>

        </nav>
      </body>
    </>
  );
}

export default App;
