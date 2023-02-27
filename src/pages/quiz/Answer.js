import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

const Answer = props => {
  const {className, quiz, quizLength, isAnswer, setAnswer, isRecord, setRecord, activeQuestion, setActiveQuestion, languageLocation} = props

  // state에 페이지네이션, 정답 기록
  const onNextQuiz = () => {
    setRecord(isRecord => [...isRecord, isAnswer])
    setActiveQuestion(activeQuestion + 1)
    setAnswer('')
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onNextQuiz()
    }
  }

  return (
    <div className={`answer ${className}`}>
      <Title>Let's start vocabulary quiz</Title>

      {
        languageLocation === 'en' ? (
          <h2>{quiz.english}</h2>
        ) : (
          <h2>{quiz.korean}</h2>
        )
      }

      <Input type="text" value={isAnswer} onChange={e => setAnswer(e.target.value)} onKeyPress={onEnter} placeholder="뜻을 입력해주세요." autoFocus/>

      <p className="answer-pagination">{activeQuestion + 1} / {quizLength}</p>

      <Button onClick={() => onNextQuiz()} bgColor="#e5cd5e">Next</Button>
    </div>
  )
}

export default Answer