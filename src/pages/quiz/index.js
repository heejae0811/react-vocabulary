import {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleSelectVocabulary} from '../../redux/vocabulary'
import Layout from '../../components/Layout'
import Answer from './Answer'
import Result from './Result'
import './index.scss'

const Quiz = () => {
  // ** Hooks
  const params = useParams()
  const dispatch = useDispatch()
  const location = useLocation()
  const languageLocation = location.pathname.split('/')[2]

  // ** States
  const [isAnswer, setAnswer] = useState('')
  const [isRecord, setRecord] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(0)

  // ** Redux States
  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const selectedVocabulary = useSelector(state => state.vocabulary.selectedVocabulary)

  useEffect(() => {
    if (params.category && vocabulary.filter(list => list.category === params.category)) {
      dispatch(handleSelectVocabulary(params.category))
    }
  }, [])

  if (!selectedVocabulary) return null

  const englishAnswer = selectedVocabulary.map(list => list.english)
  const koreanAnswer = selectedVocabulary.map(list => list.korean)
  const quizLength = selectedVocabulary.length

  return (
    <Layout>
      {
        selectedVocabulary.map((quiz, index) => {
          return (
            <Answer
              key={index}
              className={`${index === activeQuestion ? 'active' : ''}`}
              quiz={quiz}
              quizLength={quizLength}
              isAnswer={isAnswer}
              setAnswer={setAnswer}
              isRecord={isRecord}
              setRecord={setRecord}
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
              languageLocation={languageLocation}
            />
          )
        })
      }

      {
        quizLength === activeQuestion && (
          <Result
            category={params.category}
            englishAnswer={englishAnswer}
            koreanAnswer={koreanAnswer}
            isRecord={isRecord}
            languageLocation={languageLocation}
          />
        )
      }
    </Layout>
  )
}

export default Quiz