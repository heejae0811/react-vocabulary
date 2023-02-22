import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '../../redux/user'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const QuizList = () => {
  const navigate = useNavigate()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)

  return (
    <Layout className="quiz-list">
      <Title>Select vocabulary category</Title>

      <ul className="scroll">
        {
          vocabulary.map((list, index) => {
            return (
              <li key={index}>
                <p>{list.category}</p>
                <p>{list.english}</p>
                <p>{list.korean}</p>
              </li>
            )
          })
        }
      </ul>

      <Button onClick={() => navigate('/category')} bgColor="#e5cd5e">Category</Button>
    </Layout>
  )
}

export default QuizList