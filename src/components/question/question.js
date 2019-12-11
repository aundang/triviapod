import React, { useState, useEffect } from 'react';
import './question.css';
import randomQuestion from '../../utils/randomQuestion';
import Remarks from '../remarks/remarks';

const Question = () => {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState(-1);
  const [answerDetails, setAnswerDetails] = useState('');
  const [alias, setAlias] = useState('');

  useEffect(() => {
    randomQuestion().then(response => {
      setQuestion(response);
    });
  }, []);

  const handleAnswer = event => {
    let isCorrect = false;
    if (parseInt(answer) === parseInt(question.answer)) {
      setAnswerDetails('Your answer is correct');
      isCorrect = true;
    } else {
      setAnswerDetails('The answer is wrong. Please try again.');
    }

    let payload = {
      alias,
      answered: question.choices[parseInt(answer)],
      qId: question.id,
      isCorrect
    };

    console.log(payload);

    event.preventDefault();
  };

  const handleChoices = event => {
    setAnswer(event.target.value);
  };

  return (
    <div className="Question">
      <form onSubmit={handleAnswer}>
        <div className="User">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={event => setAlias(event.target.value)}
            value={alias}
          />
        </div>
        <label>{question.question}</label>
        <div className="choices">
          {question.choices ? (
            question.choices.map((choice, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="site_name"
                    value={index}
                    onClick={handleChoices}
                  />
                  {choice}
                </div>
              );
            })
          ) : (
            <span>Loading Questions ....</span>
          )}
        </div>
        <input type="submit" value="Submit" />
        <Remarks answerDetails={answerDetails} />
      </form>
    </div>
  );
};

export default Question;
