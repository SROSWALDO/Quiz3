import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { nextQuestion, restartQuiz, selectAnswer } from "./store/actions";

function App() {

  const { currentQuestion, score, questions } = useSelector(state => state)
  const question = questions[currentQuestion]
  console.log(currentQuestion);
  console.log(questions.length);
  
  

  const dispatch = useDispatch()
  
  const handleSelectedAnswer = (option) => {
    dispatch(selectAnswer(currentQuestion,option))
    dispatch(nextQuestion())
  }
  
  

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div>
      
      {currentQuestion < questions.length ? (
        <div className="mt-5">
        <h1 className="text-5xl text-white">{question.question}</h1>
        {question.options.map((option,index) => (
          <div className="flex justify-center" key={index} >
            <button onClick={() => handleSelectedAnswer(option)} className="text-white p-1 border border-white w-[400px] my-2 text-xl hover:bg-white hover:text-black transition-colors">{option}</button>
          </div>
        ))}
      </div>
      ) : (
        <div>
          <h1 className="text-white text-xl">{score} of {questions.length} </h1>
          <button onClick={() => dispatch(restartQuiz()) } className="text-white border border-white p-1" >Reset Quiz</button>
        </div>
      ) }
      </div>
    </div>
  );
}

export default App;
