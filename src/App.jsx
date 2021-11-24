import { useEffect, useMemo, useState } from 'react';
import './app.css'
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [userName, setUserName] = useState(null)

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const dataz = [{
    id: 1,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 2,
    question: "Prime minister of india ",
    answers: [
      {
        text: "narendra modi",
        correct: true
      },
      {
        text: "gandhi",
        correct: false
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 3,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 4,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 5,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 6,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 7,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 8,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 9,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 10,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 11,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 12,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 13,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 14,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  },
  {
    id: 15,
    question: "Father of india ",
    answers: [
      {
        text: "narendra modi",
        correct: false
      },
      {
        text: "gandhi",
        correct: true
      },
      {
        text: "nehru",
        correct: false
      },
      {
        text: "amit shah",
        correct: false
      },

    ]
  }
  ]

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" }

    ].reverse(),
    [])

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      <>

      </>
      {userName ? (
        <>
          <div className="main">
            {stop ? <h1 className="endtext">You earned :{earned} </h1> : (
              <>
                <div className="top">
                  <div className="timerr"><Timer
                    setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom"><Quiz dataz={dataz} setStop={setStop}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber} />
                </div></>
            )}



          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber == m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}






            </ul>
          </div>
        </>


      ) : (<Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
