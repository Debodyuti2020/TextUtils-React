// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  // Switch,
  Route, Routes
  // Link
} from "react-router-dom";
import Contact from './components/Contact';
// import Footer from './components/Footer';

// let name = "Debodyuti"

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#292a3e';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enebled!', 'success');

      // Flashing the title:-
      // setTimeout(() => {
      //   document.title = 'Hello';
      // }, 2000);
      // setTimeout(() => {
      //   document.title = 'Hi';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#eceff1';
      document.body.style.color = 'black';
      showAlert('Light mode has been enebled!', 'success');
    }
  }

  return (
    <>
    {/* Babel comiles JSX down */}
    {/* <div className="blank">Lovely</div>
    <br />
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h3>Hello, {name}!</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam rerum nostrum qui maiores et illo sapiente explicabo necessitatibus repudiandae minus, molestias eos debitis architecto reprehenderit.</p>
    </div> */}
    
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact</a>
            </li>  
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav> */}
    <Router>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title={3} aboutText="About TextUtils" /> => Wrong Proptype Error */}
      
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch> */}

        {/* In order to use react-router v6, you'll need to convert all your <Switch> elements to <Routes>. */}

        <Routes>
          {/* path vs exact path: If you are using 'exact path', react will do the exact matching of path but if you are using only 'path', react will do partial matching. */}
          {/* For example:
          /users --> Component 1
          /users/home --> Component 2 */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode} />} />
        </Routes>
      </div>
    </Router>
    {/* <Footer /> */}
    </>
  );
}

export default App;
