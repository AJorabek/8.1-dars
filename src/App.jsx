import "./App.css";
import Header from "./components/Header";
import Left from "./components/sections/Left";
import Right from "./components/sections/Right";

function App() {
  return (
    <>
      <div>
        <div>
          <Header/>
        </div>
        <main className="hero">
          <div className="container" style={{display:"flex",}}>
            <Left />
            <Right/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
