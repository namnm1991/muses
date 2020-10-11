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
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <button onClick={() => props.handleBackDown(props.level)}>
        Failed
      </button>
      <button onClick={() => props.handleLevelUp(props.level)}>
        Pass
      </button>
    </div>
    // <li>{props.title} - {props.level}</li>
  )
}

function toReview(day) {
  // day x -> check level available
  // to review
  // review 
  // add new card

  // lvl 1: every day (start since day 1)
  // lvl 2: every 2 days (start since day 1)
  // lvl 3: every 4 days (start since day 2)
  // lvl 4: every 8 days (start since day 5)
  // lvl 5: every 16 days (start since day 12)
  // lvl 6: every 32 days (start since day 27)
  // lvl 7: every 64 days (start since day 58)

  let start = [1, 1, 2, 5, 12, 27, 58]
  let review = [];

  for (let lvl = 1; lvl <= 7; lvl++) {
    let startDay = start[lvl - 1];
    if (day >= startDay) {
      let duration = day - startDay;
      if (duration % (2 ** (lvl - 1)) === 0) {
        review.push(lvl);
      }
    } else {
      break;
    }
  }

  return review;
}

export class Box extends React.Component {
  constructor(props) {
    super(props);

    let lvlCount = new Array(); // level => card count
    for (let lvl = 1; lvl <= 7; lvl++) {
      lvlCount.push(0);
    }

    cards.forEach(c => {
      lvlCount[c.level - 1] += 1;
    });

    this.state = {
      activeCard: 2,
      levelCount: lvlCount,
    }

    this.levelUp = this.levelUp.bind(this);
  }

  backDown(lvl) {
    if (lvl > 1) {
      const levelCount = this.state.levelCount.slice();
      levelCount[lvl - 1] -= 1;
      levelCount[0] += 1;
      this.setState({ levelCount: levelCount });
    }
  }

  levelUp(lvl) {
    if (lvl < 7) {
      const levelCount = this.state.levelCount.slice();
      levelCount[lvl - 1] -= 1;
      levelCount[lvl] += 1;
      this.setState({ levelCount: levelCount });
    }
  }

  render() {
    // const rows = [];

    let levels = [];
    let levelCount = this.state.levelCount;
    for (let lvl = 1; lvl <= 7; lvl++) {
      levels.push(<li key={lvl}>{levelCount[lvl - 1]}</li>);
    }

    // let reviewSchedule = [];
    // for (let d = 1; d <= 64; d++) {
    //   let reviewLvl = toReview(d);
    //   reviewSchedule.push(<li key={d}>{reviewLvl.join('-')}</li>)
    // }

    let card = cards[this.state.activeCard];

    return (<div>
      <h3>Leitner Box</h3>
      <ol>
        {levels}
      </ol>
      <Card
        title={card.title}
        description={card.description}
        level={card.level}
        handleBackDown={(lvl) => this.backDown(lvl)}
        handleLevelUp={(lvl) => this.levelUp(lvl)}
      />
      {/* <PreviewCard card={cards[0]} /> */}
      {/* <button onClick={() => this.backDown(2)}>
        Failed
      </button>
      <button onClick={() => this.levelUp(1)}>
        Pass
      </button> */}
    </div>
    )
  }
}