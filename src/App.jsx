import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { nextQuestion, restartQuiz, selectAnswer } from "./store/actions";
import check from '../src/assets/check.svg'
import x from '../src/assets/x.svg'

function App() {

  const { currentQuestion, score, questions, selectedResponses } = useSelector(state => state)
  const question = questions[currentQuestion]
  
  

  
  

  const dispatch = useDispatch()
  
  const handleSelectedAnswer = (option) => {
    dispatch(selectAnswer(currentQuestion,option))
    setTimeout(() => {
      dispatch(nextQuestion())
    }, 1500)
    
  }
  
  

  return (
    <div className="bg-black w-full h-screen flex justify-center items-center">
      <div>
      
      {currentQuestion < questions.length ? (
        <div className="mt-5">
        <h1 className="text-5xl text-white mb-5">{question.question}</h1>
        {question.options.map((option,index) => { 
          const isCorrect = question.answer === option;
          const isSelected = selectedResponses[currentQuestion] === option

          return (
          <div className="flex items-center justify-center" key={index} >
            <button disabled={selectedResponses[currentQuestion] !== undefined } onClick={() => handleSelectedAnswer(option)} className={`text-white p-1 border  w-[400px] my-2 text-xl  transition-colors ${isCorrect && isSelected ? 'border-green-600' : '' } ${isSelected && !isCorrect ? "border-red-500" : "" } ${!isSelected ? "border-white" : "" }  `}>
            {isSelected && (
              <img className="absolute" src={isCorrect ? check : x} alt="" />
            )}
            <p>{option}</p>
            </button>

            
          </div>
        )}
        )}
        <div className="flex justify-center mt-3">
        <button onClick={() => dispatch(nextQuestion())} className="text-white">Next Question</button>
        </div>
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
