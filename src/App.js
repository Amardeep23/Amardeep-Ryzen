import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import { Newuser } from './pages/NewUser/Newuser';
import ViewUsers from './pages/ViewUsers/ViewUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/' exact element = { <Home/>}></Route>
          <Route path = '/addUser' exact element = { <Newuser/>}></Route>
          <Route path = '/viewUser' exact element = { <ViewUsers/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
