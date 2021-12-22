import React, { useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  const [number, setNumber] = useState('') 

  function sample(result) {
    document.getElementById("text_a").innerHTML = result
  }

  // Post a todo
  const squareHandler = () => {
    axios.post('/square', {"number":number})
      .then(res => {
        sample(res.data)
      })
  };

  return (
    <div className="App list-group-item  justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px"}} >
      <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">Square a Number</h1>
      <h6 className="card text-white bg-primary mb-3">Emre Ozan - FASTAPI - React</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Type Your Number</h5>
        <span className="card-text"> 
          <input className="mb-2 form-control titleIn" onChange={event => setNumber(event.target.value)} placeholder='Number'/>
          <button className="btn btn-outline-primary mx-2 mb-3" style={{'borderRadius':'50px',"font-weight":"bold"}}  onClick={squareHandler}>Square</button>
        </span>
        <h5 className="card text-white bg-dark mb-3">Your Result</h5>
        <div>
          <h1 id="text_a"></h1>
        </div>
        </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" >Emre Ozan 2021, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
