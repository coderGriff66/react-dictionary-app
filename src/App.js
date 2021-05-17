import SheCodes_logo from "./SheCodes_logo.png";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className="container">
      <header className="App">
        <img src={SheCodes_logo} className="App-logo" alt="logo" />
      </header>
      
        <div className="App-topper">
          <div>
            <h2>Dictionary</h2>
          </div>
            <div>
              <p><strong>"What word are you curious about?"</strong></p>
            </div>
          
           <main>
             <Dictionary />
           </main>
             <footer>
              <strong>Coded by Jennifer Griffin and {" "}
                <a href="https://github.com/coderGriff66/react-dictionary-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a> </strong>
            </footer>
         </div>   
      </div>
    </div>
  );
}


