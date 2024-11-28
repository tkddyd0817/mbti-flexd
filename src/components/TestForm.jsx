import  { useState } from 'react';
import { questions } from '../data/questions';

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: '', answer: '' })
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q, index) => (
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((option, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={q.type.split('/')[i]}
                checked={answers[index]?.answer === q.type.split('/')[i]}
                onChange={() => handleChange(index, q.type.split('/')[i])}
                required
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TestForm;

