import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {handleQuizRecord} from '../../redux/user'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Question = props => {
  const {className, question, activeQuestion, setActiveQuestion} = props

  const [isAnswer, setAnswer] = useState('')

  const dispatch = useDispatch()

  const handelQuestionClick = () => {
    setActiveQuestion(activeQuestion + 1)

    dispatch(handleQuizRecord({
      type: 'answer',
      answer: isAnswer
    }))

  }

  return (
    <div className={`question ${className}`}>
      <h2>{question.english}</h2>
      <p>{question.korea}</p>

      <Input type="text" value={isAnswer} onChange={e => setAnswer(e.target.value)} placeholder="답을 입력해주세요."></Input>

      <Button onClick={() => handelQuestionClick()} bgColor="#ecdc6d">Next</Button>
    </div>
  )
}

export default Question