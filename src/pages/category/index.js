import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '../../redux/user'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Category = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const category = new Set(vocabulary.map((list, index) => list.category))
  const vocabularyCategory = [...category]

  const onDetailNavigate = (category) => {
    navigate(`/quiz/${category}`)
  }

  const onLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      dispatch(handleLogout())
      navigate('/login')
    } else {
      return false
    }
  }

  return (
    <Layout className="quiz-list">
      <Title>Select vocabulary category</Title>

      <ul className="scroll">
        {
          vocabularyCategory.map((category, index) => {
            return (
              <li key={index} onClick={() => onDetailNavigate(category)}>{category}</li>
            )
          })
        }
      </ul>

      <Button onClick={() => navigate('/quizCreate')} bgColor="#e5cd5e">Create new vocabulary</Button>
      <Button onClick={() => navigate('/quizList')} bgColor="#e5cd5e">Vocabulary list</Button>
      <div className="btn-area">
        <Button onClick={() => navigate('/mypage')} bgColor="#bbb">My page</Button>
        <Button onClick={onLogout} bgColor="#bbb">Logout</Button>
      </div>
    </Layout>
  )
}

export default Category