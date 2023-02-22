import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleDeleteVocabulary} from '../../redux/vocabulary'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const VocaList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const vocabulary = useSelector(state => state.vocabulary.vocabulary)

  const onDeleteVocabulary = (index) => {
    const deleteVocabulary = vocabulary.map(list => list.english)
    const deletedVocabulary = deleteVocabulary[index]

    if (window.confirm('삭제하시겠습니까?')) {
      dispatch(handleDeleteVocabulary(deletedVocabulary))
    } else {
      return false
    }
  }

  return (
    <Layout className="voca-list">
      <Title>Vocabulary list</Title>

      <ul className="scroll">
        {
          vocabulary.map((list, index) => {
            return (
              <li key={index}>
                <p>카테고리 | {list.category}</p>
                <p>단어 | {list.english}</p>
                <p>뜻 | {list.korean}</p>
                <Button onClick={() => onDeleteVocabulary(index)} height="30px" bgColor="#bbb">Delete</Button>
              </li>
            )
          })
        }
      </ul>

      <Button onClick={() => navigate('/category')} bgColor="#e5cd5e">Category</Button>
    </Layout>
  )
}

export default VocaList