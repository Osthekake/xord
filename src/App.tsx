import * as React from "react";

const showLetters = false;

interface SquareProps {
  solution?: boolean;
  blank?: boolean;
  letter?: string;
}

function Square(props: SquareProps){
  const [state, setState] = React.useState(showLetters ? props.letter : '')

  return <input onChange={(e) => setState(e.target.value.toUpperCase())} className={`${props.solution ? 'solution' : ''} ${props.blank ? '': 'relevant'} square`} value={state}/>
}

interface RowProps {
  leadBlanks: number;
  solution: number;
  hint: string;
  correct: string;
}

function Row(props: RowProps){
  const blanks = Array.apply(null, Array(props.leadBlanks));
  const letters = props.correct.toUpperCase().split('');

  return <div className="row">
    <div className="hint">{props.hint}</div>
    {blanks.map(_ => <Square blank />)}
    {letters.map((l, i) => l === ' ' ? <Square blank /> : <Square letter={l} solution={i === props.solution}/>)}
  </div>
}

function App() {
  return (
    <>
      <div className="xord">
        <Row leadBlanks={3} correct="lødølja" hint="elva ved hytta" solution={5}/>
        <Row leadBlanks={7} correct="buret" hint="der det er tv" solution={1}/>
        <Row leadBlanks={4} correct="appelsin" hint="frukt" solution={4}/>
        <Row leadBlanks={5} correct="kake" hint="dessert" solution={3}/>
        <Row leadBlanks={3} correct="etterturassen" hint="hvilested etter tur" solution={5}/>
        <Row leadBlanks={6} correct="marsipan" hint="eggfyll" solution={2}/>
        <Row leadBlanks={4} correct="ryktet går" hint="tegnespill" solution={4}/>
        <Row leadBlanks={0} correct="labyrinten" hint="på radio hver morgen" solution={8}/>
        <Row leadBlanks={8} correct="tydal" hint="kommune" solution={0}/>
      </div>
    </> )
}

export default App
