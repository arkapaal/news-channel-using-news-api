import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItems from './components/NewsItems';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <News/>
      <NewsItems/>
    </div>
  );
}

export default App;
