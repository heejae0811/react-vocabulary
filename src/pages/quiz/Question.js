import Button from '../../components/Button'

const Question = props => {
  const {className, question, activeQuestion, setActiveQuestion} = props

  const handelQuestionClick = () => {
    setActiveQuestion(activeQuestion + 1)
  }

  return (
    <div className={`question ${className}`}>
      <p>{question.english}</p>
      <p>{question.korea}</p>

      <Button onClick={() => handelQuestionClick()}>Next</Button>
    </div>
  )
}

export default Question