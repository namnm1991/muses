import React from 'react';

import './App.css';

function Card(props) {
  const style = {
    'width': '18rem',
  };

  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
      </div>
    </div>
  );
}

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  generateCards() {
    const cards = [
      { title: 't', body: 'b' },
      { title: 't', body: 'b' },
    ]

    return cards.slice(0).map((card, index) => {
      return (
        < Card title={card.title} body={card.body} key={index} />
      );
    })
  }

  render() {
    return (
      <div className="Box">
        {this.generateCards()}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Box />
          </div>
          <div className="col">
            <Box />
          </div>
          <div className="col">
            <Box />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
