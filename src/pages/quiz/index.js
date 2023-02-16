import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleSelectedVocabulary} from '../../redux/vocabulary'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Question from './Question'
import './index.scss'

const Quiz = () => {
  const [isAnswer, setAnswer] = useState('')
  const [activeQuestion, setActiveQuestion] = useState(0)

  console.log(isAnswer)
  // console.log(setAnswer)

  const params = useParams()
  const dispatch = useDispatch()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const selectedVocabulary = useSelector(state => state.vocabulary.selectedVocabulary)

  // console.log(selectedVocabulary)

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
      <Title>Let's start vocabulary test</Title>

      {
        selectedVocabulary.map((question, index) => {
          return (
            <Question
              key={index}
              className={`${index === activeQuestion ? 'active' : ''}`}
              question={question}
              activeQuestion={activeQuestion}
              setActiveQuestion={setActiveQuestion}
            />
          )
        })
      }

      {/*<Input type="text" value={isAnswer} onChange={e => setAnswer(e.target.value)} palceholder="답을 입력해주세요."></Input>*/}
    </Layout>
  )
}

export default Quiz