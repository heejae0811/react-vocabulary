import Button from '../../components/Button'
import Input from '../../components/Input'
import Title from '../../components/Title'

const Answer = props => {
  const {className, answer, length, isAnswer, setAnswer, isRecord, setRecord, activeQuestion, setActiveQuestion} = props

  const onNextQuiz = () => {
    setActiveQuestion(activeQuestion + 1)
    setRecord(isRecord => [...isRecord, isAnswer])
    setAnswer('')
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onNextQuiz()
    }
  }

  return (
    <div className={`question ${className}`}>
      <Title>Let's start vocabulary quiz</Title>

      <h2>{answer.english}</h2>

      <Input type="text" value={isAnswer} onChange={e => setAnswer(e.target.value)} onKeyPress={onEnter} placeholder="뜻을 입력해주세요." autoFocus/>

      <p className="pagination">{activeQuestion + 1} / {length}</p>

      <Button onClick={() => onNextQuiz()} bgColor="#e5cd5e">Next</Button>
    </div>
  )
}

export default Answer