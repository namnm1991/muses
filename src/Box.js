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
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h5 className="card-title">{props.card.title}</h5>
          </div>
          <div className="flip-card-back">
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

function Deck(props) {
  return (
    <li>Lvl {props.level} - {props.count}</li>
  )
}

export class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [];
    let lvlCount = new Map(); // level => card count
    cards.forEach(c => {
      rows.push(<Card title={c.title} level={c.level} key={c.title} />);

      let count = 0;
      if (lvlCount.has(c.level)) {
        count = lvlCount.get(c.level);
      }
      lvlCount.set(c.level, count + 1);
    });

    let decks = [];
    for (let lvl = 1; lvl <= 7; lvl++) {
      decks.push(<Deck level={lvl} count={lvlCount.get(lvl)} />);
    }

    return (<div>
      <h3>Leitner Box</h3>
      <ul>
        {decks}
      </ul>
      <ul>
        {rows}
      </ul>
      <PreviewCard card={cards[0]} />
    </div>
    )
  }
}