/* eslint-disable no-case-declarations */
const initialState = {
  currentQuestion: 0,
  selectedResponses: [],
  score: 0,
  questions: [
  { id: 4, question: "¿Quién pintó la Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"], answer: "Leonardo da Vinci" },
  { id: 5, question: "¿Cuál es el océano más grande del mundo?", options: ["Atlántico", "Pacífico", "Índico"], answer: "Pacífico" },
  { id: 6, question: "¿En qué año llegó el hombre a la Luna?", options: ["1965", "1969", "1971"], answer: "1969" },
  { id: 7, question: "¿Cuál es el país con más habitantes del mundo?", options: ["India", "China", "Estados Unidos"], answer: "China" },
  { id: 8, question: "¿Qué instrumento musical tiene teclas blancas y negras?", options: ["Guitarra", "Piano", "Violín"], answer: "Piano" },
  { id: 9, question: "¿Cuál es el metal más ligero?", options: ["Hierro", "Litio", "Aluminio"], answer: "Litio" },
  { id: 10, question: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["Gabriel García Márquez", "Miguel de Cervantes", "Jorge Luis Borges"], answer: "Miguel de Cervantes" },
  { id: 11, question: "¿Qué país es famoso por la Torre Eiffel?", options: ["Italia", "Francia", "Alemania"], answer: "Francia" },
  { id: 12, question: "¿Qué gas respiramos los seres humanos?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno"], answer: "Oxígeno" },
  { id: 13, question: "¿Cuál es el río más largo del mundo?", options: ["Amazonas", "Nilo", "Yangtsé"], answer: "Amazonas" },
],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_ANSWER":
      const updatedResponses = [...state.selectedResponses]
      updatedResponses[action.payload.indexQuestion] = action.payload.option;

      const isCorrect = state.questions[action.payload.indexQuestion].answer === action.payload.option;
      const uptatedScore = isCorrect ? state.score + 1 : state.score

      return {
        ...state,
        selectedResponses : updatedResponses,
        score: uptatedScore
      }
      case "NEXT_QUESTION":
        return {
          ...state,
          currentQuestion: state.currentQuestion + 1
        }
      case "RESTART_QUIZ":
        return {
          ...initialState
        }
    default:
      return state;
  }
};
