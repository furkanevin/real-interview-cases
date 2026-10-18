import { useState, useEffect } from "react";
import AnswerTable from "./components/AnswerTable";
import axios from "axios";

// Her soru için toplam süre ve şıkların kilitli kalacağı ilk saniyeler
const QUESTION_TIME = 30;
const LOCK_TIME = 10;

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const isFinished = questions.length > 0 && currentQuestion >= questions.length;
  const isLocked = timeLeft > QUESTION_TIME - LOCK_TIME;
  const selectedAnswer = answers.find((i) => i.question === currentQuestion)?.answer;

  // soruları al
  useEffect(() => {
    axios.get("/db.json").then((res) => setQuestions(res.data));
  }, []);

  // her soru başladığında sayacı sıfırla ve saniyede bir azalt
  useEffect(() => {
    if (questions.length === 0 || isFinished) return;

    setTimeLeft(QUESTION_TIME);

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion, questions.length, isFinished]);

  // süre bitince sonraki soruya geç
  useEffect(() => {
    if (timeLeft === 0) handleNextQuestion();
  }, [timeLeft]);

  // seçilen seçeneği kaydeder (kilitliyken seçim yapılamaz)
  const handleOptionSelect = (option) => {
    if (isLocked) return;

    setAnswers((prev) => [
      ...prev.filter((i) => i.question !== currentQuestion),
      { question: currentQuestion, answer: option },
    ]);
  };

  // sonraki soruya geçer
  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white py-5 px-4">
      <div className="container max-w-lg mx-auto">
        <h1 className="text-4xl text-center my-20">QUIZ</h1>
        {questions.length > 0 && !isFinished ? (
          <div className="relative flex flex-col items-center border rounded py-6 px-5">
            <div className="absolute bg-black top-[-25px] p-3 border rounded-full">{timeLeft}</div>

            <h2 className="text-lg text-blue-400 text-center my-5">
              Soru {currentQuestion + 1} / {questions.length}
            </h2>

            <p className="text-center text-[20px] font-semibold">{questions[currentQuestion].text}</p>

            {isLocked && (
              <p className="text-sm text-zinc-400 mt-3">
                Şıklar {timeLeft - (QUESTION_TIME - LOCK_TIME)} saniye sonra açılacak
              </p>
            )}

            <div className="mt-8 w-full flex flex-col gap-5">
              {questions[currentQuestion].choices.map((option) => (
                <label
                  key={option}
                  className={`border rounded p-3 flex justify-between ${
                    isLocked ? "bg-zinc-700 cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-gray-700"
                  } ${selectedAnswer === option ? "border-blue-400" : ""}`}
                >
                  {option}

                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    disabled={isLocked}
                    checked={selectedAnswer === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                </label>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="mt-8 self-end bg-blue-500 hover:bg-blue-600 disabled:bg-zinc-700 disabled:cursor-not-allowed rounded px-5 py-2"
            >
              {currentQuestion + 1 === questions.length ? "Bitir" : "Sonraki Soru"}
            </button>
          </div>
        ) : (
          isFinished && <AnswerTable questions={questions} answers={answers} />
        )}
      </div>
    </div>
  );
};

export default App;
