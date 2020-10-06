import React from 'react';

let cards = [
  {
    title: 'Item 1',
    description: 'lorem ipsum',
    level: 1
  },
  {
    title: 'Item 2',
    description: 'lorem ipsum',
    level: 1
  },
  {
    title: 'Item 3',
    description: 'lorem ipsum',
    level: 2
  },
  {
    title: 'Item 4',
    description: 'lorem ipsum',
    level: 3
  }
]

function PreviewCard(props) {
  const style = {
    'width': '18rem'
  };

  const imageStyle = {
    'width': '300px',
    'height': '300px',
  }

  return (
    <div className="card" style={style}>
      {/* <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">{props.card.description}</p>
        <p className="card-level">{props.card.level}</p>
      </div> */}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h5 className="card-title">{props.card.title}</h5>
          </div>
          <div class="flip-card-back">
            {/* <h5 className="card-title">{props.card.title}</h5> */}
            <p className="card-text">{props.card.description}</p>
            <p className="card-level">{props.card.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <li>{props.title} - {props.level}</li>
  )
}

export class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    cards.forEach(c => {
      rows.push(<Card title={c.title} level={c.level} key={c.title} />);
    });
    return (<div>
      <h3>Leitner Box</h3>
      <ul>
        {rows}
      </ul>
      <PreviewCard card={cards[0]} />
    </div>
    )
  }
}