import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

// Generate a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Trivia = ({
  question,
  setStop,
  questionNumber,
  setQuestionNumber,
  randomNumber,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  // const [letsPlay] = useSound(play);
  // const [correctAnswer] = useSound(correct);
  // const [wrongAnswer] = useSound(wrong);

  // useEffect(() => {
  //   {
  //     letsPlay();
  //   }
  // }, [letsPlay]);

  const presentQsn = question
    ? question[questionNumber - 1][questionNumber][randomNumber]
    : null;

  console.log(questionNumber);

  // if (questionNumber == "6") {
  //   setStop(true);
  // }

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        console.log("correct answer");
        if (questionNumber === 5) setStop(true);
        else {
          // correctAnswer();
          delay(2000, () => {
            setSelectedAnswer(null);
          });
        }
      } else {
        console.log("wrong answer");
        // wrongAnswer();
        delay(2000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{presentQsn?.question}</div>
      <div className="answers">
        {presentQsn?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
