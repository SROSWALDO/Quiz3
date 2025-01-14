

export const selectAnswer = (indexQuestion,option) => (dispatch) => {
    dispatch({ type: "SELECT_ANSWER", payload: { indexQuestion, option } })
}

export const nextQuestion = () => ({
    type: "NEXT_QUESTION"
})

export const restartQuiz = () => ({
    type: "RESTART_QUIZ"
})