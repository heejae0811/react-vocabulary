import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handelQuizRecord} from '../../redux/user'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const {category, koreanAnswer, isRecord} = props

  // ** Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const correctAnswer = isRecord.filter(record => koreanAnswer.includes(record))
  const wrongAnswer = isRecord.filter(record => !koreanAnswer.includes(record))


  const onSaveQuiz = () => {
    dispatch(handelQuizRecord({
      category: category,
      correctAnswer: correctAnswer.length,
      wrongAnswer: wrongAnswer.length,
      time: new Date().toLocaleString()
    }))
    navigate('/category')
  }

  return (
    <div className="result">
      <Title>Result of the quiz</Title>

      <ul>
        <li>
          <h3>총 문제</h3>
          <p>{isRecord.length}</p>
        </li>
        <li>
          <h3>정답</h3>
          <p>{correctAnswer.length}</p>
        </li>
        <li>
          <h3>오답</h3>
          <p>{wrongAnswer.length}</p>
        </li>
      </ul>

      <Button onClick={() => onSaveQuiz()} bgColor="#e5cd5e">Again quiz</Button>
    </div>
  )
}

export default Result