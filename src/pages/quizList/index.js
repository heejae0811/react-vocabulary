import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Button from '../../components/Button'
import './index.scss'

const QuizList = () => {
  const navigate = useNavigate()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const category = new Set(vocabulary.map((list, index) => list.category))
  const vocabularyCategory = [...category]

  const handleDetailNavigate = (category) => {
    navigate(`/quiz/${category}`)
  }

  return (
    <Layout className="quiz-list">
      <Title>Select vocabulary category</Title>

      <ul>
        {
          vocabularyCategory.map((category, index) => {
            return (
              <li key={index} onClick={() => handleDetailNavigate(category)}>{category}</li>
            )
          })
        }
      </ul>

      <Button onClick={() => navigate('/quizCreate')} bgColor="#ecdc6d">Create new vocabulary</Button>
    </Layout>
  )
}

export default QuizList