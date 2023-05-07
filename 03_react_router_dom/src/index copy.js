import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';


function Home() {
  return (
    <div>
      <h2> Home </h2>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2> Topics </h2>
      Topics...
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2> Contact </h2>
      Contact...
    </div>
  )
}

function App() {
  return (
    <div> 
      <h1> React Router DOM example </h1>

      <ul>
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/topics"> Topics </a> </li>
        <li> <a href="/contact"> Contact </a> </li>
      </ul>

      <Route path='/'> <Home> </Home> </Route>
      <Route path='/topics'> <Topics> </Topics> </Route>
      <Route path='/contact'> <Contact> </Contact> </Route>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
