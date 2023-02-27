import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handelQuizRecord} from '../../redux/user'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const {category, englishAnswer, koreanAnswer, isRecord, languageLocation} = props

  // ** Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const enCorrectAnswer = isRecord.filter(record => koreanAnswer.includes(record))
  const enWrongAnswer = isRecord.filter(record => !koreanAnswer.includes(record))

  const krCorrectAnswer = isRecord.filter(record => englishAnswer.includes(record))
  const krWrongAnswer = isRecord.filter(record => !englishAnswer.includes(record))

  const onSaveQuiz = () => {
    if (languageLocation === 'en') {
      dispatch(handelQuizRecord({
        category: category,
        correctAnswer: enCorrectAnswer.length,
        wrongAnswer: enWrongAnswer.length,
        time: new Date().toLocaleString()
      }))
      navigate('/category')
    } else {
      dispatch(handelQuizRecord({
        category: category,
        correctAnswer: krCorrectAnswer.length,
        wrongAnswer: krWrongAnswer.length,
        time: new Date().toLocaleString()
      }))
      navigate('/category')
    }
  }

  return (
    <div className="result">
      <Title>Result of the quiz</Title>

      <ul>
        <li>
          <h3>총 문제</h3>
          <p>{isRecord.length}</p>
        </li>

        {
          languageLocation === 'en' ? (
            <>
              <li>
                <h3>정답</h3>
                <p>{enCorrectAnswer.length}</p>
              </li>
              <li>
                <h3>오답</h3>
                <p>{enWrongAnswer.length}</p>
              </li>
            </>
          ) : (
            <>
              <li>
                <h3>정답</h3>
                <p>{krCorrectAnswer.length}</p>
              </li>
              <li>
                <h3>오답</h3>
                <p>{krWrongAnswer.length}</p>
              </li>
            </>
          )
        }
      </ul>

      <Button onClick={() => onSaveQuiz()} bgColor="#e5cd5e">Again quiz</Button>
    </div>
  )
}

export default Result