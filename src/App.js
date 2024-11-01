import './App.css';
import Alert from './components/Alert.js';
import Navbar from'./components/Navbar.js';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [blue, setBlue] = useState(''); // initially disabled 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  
  // const toogleBlue = () => {
  //   if(blue === 'enable') {
  //     setBlue('disable');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert('Blue Mode has been disabled', 'success');
  //   } else {
  //     setBlue('enable');
  //     document.body.style.backgroundColor = '#BAD6FC';
  //     document.body.style.color = 'black';
  //     showAlert('Blue Mode has been enabled', 'success');
  //     document.title = "TextUtils - Blue Mode"
  //   }
  // } 

  // const toogleMode = () => {
  //   if(mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#3C3F41';
  //     document.body.style.color = 'white';
  //     showAlert('Dark Mode has been enabled', 'success');
  //     document.title = "TextUtils - Dark Mode"
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert('Light Mode has been enabled', 'success');
  //     document.title = "TextUtils - Light Mode"
  //   }
  // } 

  const toogleBlue = () => {
    if (blue === 'enable') {
      setBlue('disable');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Blue Mode has been disabled', 'success');
    } else {
      // Disable dark mode if enabled
      setMode('light');
      // Enable blue mode
      setBlue('enable');
      document.body.style.backgroundColor = '#BAD6FC';
      document.body.style.color = 'black';
      showAlert('Blue Mode has been enabled', 'success');
      // document.title = "TextUtils - Blue Mode";
    }
  }
  
  const toogleMode = () => {
    if (mode === 'light') {
      // Disable blue mode if enabled
      setBlue('disable');
      // Enable dark mode
      setMode('dark');
      document.body.style.backgroundColor = '#3C3F41';
      document.body.style.color = 'white';
      showAlert('Dark Mode has been enabled', 'success');
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has been enabled', 'success');
      // document.title = "TextU 
    }
  }  

  return (
    <>
    <Router>
     <Navbar title="TextUtils" homeText="Home" aboutText="About" button="Search" mode={mode} toogleMode={toogleMode} blue={blue} toogleBlue={toogleBlue} />
     <Alert alert={alert}/>
     <div className="container my-4 ">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} blue={blue} />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter, Remove extra spaces and Text Conversion" mode={mode} blue={blue} />} />
      </Routes>
     </div>
     <Footer />
     </Router>
    </>
  );
}

export default App;
