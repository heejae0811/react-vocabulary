import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleSelecteVocabulary} from '../../redux/vocabulary'
import Layout from '../../components/Layout'
import Answer from './Answer'
import Result from './Result'
import './index.scss'

const Quiz = () => {
  const [isAnswer, setAnswer] = useState('')
  const [isRecord, setRecord] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(0)

  const params = useParams()
  const dispatch = useDispatch()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const selectedVocabulary = useSelector(state => state.vocabulary.selectedVocabulary)

  useEffect(() => {
    if (params.category && vocabulary.filter(category => category.category === params.category)) {
      dispatch(handleSelecteVocabulary(params.category))
    }
  }, [])

  if (!selectedVocabulary) return null

  const koreanAnswer = selectedVocabulary.map(list => list.korean)
  const vocabularyLength = selectedVocabulary.length

  return (
    <Layout>
      {
        selectedVocabulary.map((answer, index) => {
          return (
            <Answer
              key={index}
              className={`${index === activeQuestion ? 'active' : ''}`}
              answer={answer}
              length={vocabularyLength}
              isAnswer={isAnswer}
              setAnswer={setAnswer}
              isRecord={isRecord}
              setRecord={setRecord}
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
            />
          )
        })
      }

      {
        selectedVocabulary.length === activeQuestion && (
          <Result
            category={params.category}
            koreanAnswer={koreanAnswer}
            isRecord={isRecord}
          />
        )
      }
    </Layout>
  )
}

export default Quiz