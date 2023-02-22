import Button from '../../components/Button'
import Title from '../../components/Title'
import Input from '../../components/Input'

const Answer = props => {
  const {className, question, length, activeQuestion, setActiveQuestion, answer, setAnswer, record, setRecord} = props

  const onNextQuiz = () => {
    setActiveQuestion(activeQuestion + 1)
    setRecord(record => [...record, answer])
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

      <h2>{question.english}</h2>

      <Input type="text" value={answer} onChange={e => setAnswer(e.target.value)} onKeyPress={onEnter} placeholder="뜻을 입력해주세요." autoFocus/>

      <p className="pagination">{activeQuestion + 1} / {length}</p>

      <Button onClick={() => onNextQuiz()} bgColor="#e5cd5e">Next</Button>
    </div>
  )
}

export default Answer