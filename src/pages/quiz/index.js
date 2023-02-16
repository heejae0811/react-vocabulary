import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleSelectedVocabulary} from '../../redux/vocabulary'
import Layout from '../../components/Layout'
import Question from './Question'
import Result from './Result'
import './index.scss'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)

  const params = useParams()
  const dispatch = useDispatch()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const selectedVocabulary = useSelector(state => state.vocabulary.selectedVocabulary)
  const vocabularyLength = selectedVocabulary.length

  useEffect(() => {

  }, [])

  useEffect(() => {
    if (params.category && vocabulary.filter(category => category.category === params.category)) {
      dispatch(handleSelectedVocabulary(params.category))
    }
  }, [])

  if (!selectedVocabulary) return null

  return (
    <Layout>
      {
        selectedVocabulary.map((question, index) => {
          return (
            <Question
              key={index}
              className={`${index === activeQuestion ? 'active' : ''}`}
              question={question}
              length={vocabularyLength}
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
            />
          )
        })
      }

      {
        selectedVocabulary.length === activeQuestion && (
          <Result/>
        )
      }
    </Layout>
  )
}

export default Quiz