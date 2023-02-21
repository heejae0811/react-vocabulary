import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'
import {handelQuizRecord} from '../../redux/user'
import {useDispatch} from 'react-redux'

const Result = props => {
  const {category, record, koreaAnswer} = props

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const correctAnswer = record.filter(list => koreaAnswer.includes(list))
  const wrongAnswer = record.filter(list => !koreaAnswer.includes(list))

  const handleBeforeNavigate = () => {
    dispatch(handelQuizRecord({
      category: category,
      correctAnswer: correctAnswer.length,
      wrongAnswer: wrongAnswer.length,
      time: new Date().toLocaleString()
    }))

    navigate(-1)
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

      <Button onClick={() => handleBeforeNavigate()} bgColor="#e5cd5e">Again quiz</Button>
    </div>
  )
}

export default Result