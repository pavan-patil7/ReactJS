import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/footer";
function App() {
  return (
    <div>
    <Header name="pavan"/>
    <hr/>
    <Header name="kumar"/>
    
    <div className="App">
    <h2>Hello welcome to react first_app</h2>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
