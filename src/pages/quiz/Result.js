import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handelQuizRecord} from '../../redux/user'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const {category, record, koreanAnswer} = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const correctAnswer = record.filter(list => koreanAnswer.includes(list))
  const wrongAnswer = record.filter(list => !koreanAnswer.includes(list))

  const onSaveQuiz = () => {
    dispatch(handelQuizRecord({
      category: category,
      correctAnswer: correctAnswer.length,
      wrongAnswer: wrongAnswer.length,
      time: new Date().toLocaleString()
    }))

    navigate('/quizList')
  }

  return (
    <div className="result">
      <Title>Result of the quiz</Title>

      <ul>
        <li>
          <h3>총 문제 수</h3>
          <p>{record.length}</p>
        </li>
        <li>
          <h3>정답 갯수</h3>
          <p>{correctAnswer.length}</p>
        </li>
        <li>
          <h3>오답 갯수</h3>
          <p>{wrongAnswer.length}</p>
        </li>
      </ul>

      <Button onClick={() => onSaveQuiz()} bgColor="#e5cd5e">Again quiz</Button>
    </div>
  )
}

export default Result