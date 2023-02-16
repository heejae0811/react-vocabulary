import Button from '../../components/Button'
import Title from '../../components/Title'
import Input from '../../components/Input'


const Question = props => {
  const {className, question, length, activeQuestion, setActiveQuestion, answer, setAnswer, record, setRecord} = props

  const handelQuestionClick = () => {
    setActiveQuestion(activeQuestion + 1)

    setRecord(record => [...record, answer])
    setAnswer('')
  }

  console.log(record)

  return (
    <div className={`question ${className}`}>
      <Title>Let's start vocabulary quiz</Title>

      <h2>{question.english}</h2>

      <Input type="text" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="뜻을 입력해주세요."/>

      <p className="pagination">{activeQuestion + 1} / {length}</p>

      <Button onClick={() => handelQuestionClick()} bgColor="#ecdc6d">Next</Button>
    </div>
  )
}

export default Question