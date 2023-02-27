import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handelQuizRecord} from '../../redux/user'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const {category, selectedVocabulary, englishAnswer, koreanAnswer, isRecord, languageLocation} = props

  // ** Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const enCorrectAnswer = isRecord.filter(record => koreanAnswer.includes(record))
  const enWrongAnswer = isRecord.filter(record => !koreanAnswer.includes(record))

  console.log(enCorrectAnswer)
  console.log(enWrongAnswer)
  console.log(isRecord)

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

      <ul className="result-info">
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

      <ul className="result-record">
        <li>
          <h3>영어</h3>
          {
            selectedVocabulary.map((list, index) => {
              return(
                <p key={index}>{index + 1}. {list.english}</p>
              )
            })
          }
        </li>
        <li>
          <h3>뜻</h3>
          {
            selectedVocabulary.map((list, index) => {
              return(
                <p key={index}>{index + 1}. {list.korean}</p>
              )
            })
          }
        </li>
        <li>
          <h3>답변</h3>
          {
            isRecord.map((record, index) => {
              return(
                <p key={index}>{index + 1}. {record}</p>
              )
            })
          }
        </li>
      </ul>

      <Button onClick={() => onSaveQuiz()} bgColor="#e5cd5e">Again quiz</Button>
    </div>
  )
}

export default Result