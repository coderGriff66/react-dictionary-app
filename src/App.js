import Portuguese_def from "./Portuguese_def.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="Wrapper">
      <header className="App">
        <img src={Portuguese_def} className="App-logo rounded-corners img-fluid" alt="logo" />
      </header>
      
        <div className="App-topper">
          <h1>Dictionary</h1>
            <div className="Question">
              <span><strong>"What word are you curious about"</strong></span> 
            </div>
          
           <main>
             <Dictionary defaultKeyword="test" />
           </main>
             <footer>
              <strong>Coded by Jennifer Griffin and {" "}
                <a href="https://github.com/coderGriff66/react-dictionary-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a> </strong>
            </footer>
         </div>   
      </div>
      </div>
    </div>
  );
}


