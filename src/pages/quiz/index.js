import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handelQuizRecord} from '../../redux/user'
import {handleSelectedVocabulary} from '../../redux/vocabulary'
import Layout from '../../components/Layout'
import Answer from './Answer'
import Result from './Result'
import './index.scss'

const Quiz = () => {
  const [answer, setAnswer] = useState('')
  const [record, setRecord] = useState([])
  const [activeQuestion, setActiveQuestion] = useState(0)

  const params = useParams()
  const dispatch = useDispatch()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const selectedVocabulary = useSelector(state => state.vocabulary.selectedVocabulary)
  const user = useSelector(state => state.user)

  // console.log(selectedVocabulary)
  // console.log(record)
  console.log(user)

  useEffect(() => {
    if (params.category && vocabulary.filter(category => category.category === params.category)) {
      dispatch(handleSelectedVocabulary(params.category))
    }
  }, [])

  // useEffect(() => {
  //   dispatch(handelQuizRecord({
  //     type: 'time',
  //     time: new Date().toLocaleString()
  //   }))
  // }, [])

  if (!selectedVocabulary) return null

  const koreaAnswer = selectedVocabulary.map(answer => answer.korea)
  const vocabularyLength = selectedVocabulary.length

  // const shuffle = (array) => {
  //   array.sort(() => Math.random() - 0.5)
  // }

  return (
    <Layout>
      {
        selectedVocabulary.map((question, index) => {
          return (
            <Answer
              key={index}
              className={`${index === activeQuestion ? 'active' : ''}`}
              question={question}
              length={vocabularyLength}
              answer={answer}
              setAnswer={setAnswer}
              record={record}
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
            record={record}
            koreaAnswer={koreaAnswer}
          />
        )
      }
    </Layout>
  )
}

export default Quiz