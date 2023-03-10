import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '../../redux/user'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Category = () => {
  // ** Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ** Redux States
  const vocabulary = useSelector(state => state.vocabulary.vocabulary)
  const category = new Set(vocabulary.map(list => list.category))
  const vocabularyCategory = [...category]

  const onEnDetailNavigate = (category) => {
    navigate(`/quiz/en/${category}`)
  }

  const onKrDetailNavigate = (category) => {
    navigate(`/quiz/kr/${category}`)
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
    <Layout className="category">
      <Title>Select vocabulary category</Title>

      <ul className="scroll">
        {
          vocabularyCategory.map((category, index) => {
            return (
              <li key={index}>
                {category}
                <div>
                  <Button onClick={() => onEnDetailNavigate(category)} height="30px" bgColor="#bbb">English</Button>
                  <Button onClick={() => onKrDetailNavigate(category)} height="30px" bgColor="#bbb">Korean</Button>
                </div>
              </li>
            )
          })
        }
      </ul>

      <div className="category-btn">
        <Button onClick={() => navigate('/vocaCreate')} bgColor="#ff9bac">Create new vocabulary</Button>
        <Button onClick={() => navigate('/vocaList')} bgColor="#e5cd5e">Vocabulary list</Button>
        <div>
          <Button onClick={() => navigate('/mypage')} bgColor="#bbb">My page</Button>
          <Button onClick={onLogout} bgColor="#bbb">Logout</Button>
        </div>
      </div>
    </Layout>
  )
}

export default Category