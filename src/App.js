import "./App.scss";
import Header from "./components/header/Header";
import Content from "./components/content/Constent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
