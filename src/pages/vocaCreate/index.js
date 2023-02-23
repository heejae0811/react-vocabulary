import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handleCreateVocabulary} from '../../redux/vocabulary'
import useInput from '../../hooks/useInput'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const VocaCreate = () => {
  const vocabularyCategory = useInput()
  const vocabularyEnglish = useInput()
  const vocabularyKorean = useInput()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCreateVocabulary = () => {
    if (vocabularyCategory.value === '') {
      alert('카테고리를 입력해주세요.')
    } else if (vocabularyEnglish.value === '') {
      alert('영어 단어를 입력해주세요.')
    } else if (vocabularyKorean.length === 0) {
      alert('한글 뜻을 입력해주세요.')
    } else {
      if (window.confirm('새로운 단어를 등록하시겠습니까?')) {
        dispatch(handleCreateVocabulary({
          category: vocabularyCategory.value,
          english: vocabularyEnglish.value,
          korean: vocabularyKorean.value
        }))
        navigate('/category')
      } else {
        return false
      }
    }
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onCreateVocabulary()
    }
  }

  return (
    <Layout className="voca-create">
      <Title>Create new vocabulary</Title>

      <div className="voca-create-input">
        <div>
          <p>Category</p>
          <Input type="text" onKeyPress={onEnter} placeholder="카테고리를 입력해주세요." {...vocabularyCategory}/>
        </div>

        <div>
          <p>English</p>
          <Input type="text" onKeyPress={onEnter} placeholder="영어 단어를 입력해주세요." {...vocabularyEnglish}/>
        </div>

        <div>
          <p>Korean</p>
          <Input type="text" onKeyPress={onEnter} placeholder="한글 뜻을 입력해주세요." {...vocabularyKorean}/>
        </div>
      </div>

      <div className="voca-create-btn">
        <Button onClick={() => onCreateVocabulary()} bgColor="#2b2861">Confirm</Button>
        <Button onClick={() => navigate('/category')} bgColor="#bbb">Cancel</Button>
      </div>
    </Layout>
  )
}

export default VocaCreate