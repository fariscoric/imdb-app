import './App.css';
import FrontPage from './pages/frontpage.js'
import {Link, NavLink} from 'react-router-dom'
import MoviePage from './pages/movies250.js'
import NavBar from './components/navbar/navbar'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <FrontPage />
    </div>
  );
}

export default App;
