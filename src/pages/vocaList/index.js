import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleDeleteVocabulary} from '../../redux/vocabulary'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const VocaList = () => {
  const vocabulary = useSelector(state => state.vocabulary.vocabulary)

  const [isSort, setSort] = useState(vocabulary)

  useEffect(() => {
    if(!vocabulary) {
      return setSort(vocabulary)
    }
  }, [isSort])

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // 알파벳순 정렬
  const englishSort = () => {
    let englishList = [...vocabulary]
    englishList.sort((a, b) => a.english.toUpperCase() < b.english.toUpperCase() ? -1 : 1)
    setSort(englishList)
  }

  // 가나다순 정렬
  const koreanSort = () => {
    let koreanList = [...vocabulary]
    koreanList.sort((a, b) => a.korean < b.korean ? -1 : 1)
    setSort(koreanList)
  }

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

      <div className="voca-list-sort">
        <p>총 {isSort.length}개</p>
        <ul>
          <li onClick={englishSort}>알파벳순</li>
          <li onClick={koreanSort}>가나다순</li>
        </ul>
      </div>

      <ul className="voca-list-item scroll">
        {
          isSort.map((list, index) => {
            return (
              <li key={index}>
                <p>{list.category}</p>
                <p>{list.english}</p>
                <p>{list.korean}</p>
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