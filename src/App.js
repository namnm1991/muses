import React from 'react';

import './App.css';

function Card() {
  return (
    <div className="card" style={{ width: 18 + 'rem' }}>
      <div class="card-body">
        <h5 className="card-title">Card title</h5>
        <p classNmae="card-text">Card body</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            < Card />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
