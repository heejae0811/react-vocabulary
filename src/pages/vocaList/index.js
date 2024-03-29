import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleDeleteVocabulary} from '../../redux/vocabulary'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import SelectBox from '../../components/SelectBox'
import Title from '../../components/Title'
import './index.scss'

const VocaList = () => {
    // ** Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // ** Redux States
    const vocabulary = useSelector(state => state.vocabulary.vocabulary)
    const setCategory = new Set(vocabulary.map(list => list.category))
    const vocabularyCategory = ['All list', ...setCategory]

    // ** States
    const [isSortList, setSortList] = useState(vocabulary)
    const [isSelectOption, setSelectOption] = useState('')

    // 정렬 리스트 화면에 나타나게
    useEffect(() => {
        let categoryList = vocabulary.filter(list => list.category === isSelectOption)

        if (categoryList.length === 0) {
            setSortList(vocabulary)
        } else {
            setSortList(categoryList)
        }
    }, [isSelectOption])

    // 알파벳순 정렬
    const onEnglishSort = () => {
        let englishList = [...vocabulary]
        englishList.sort((a, b) => a.english.toUpperCase() < b.english.toUpperCase() ? -1 : 1)
        setSortList(englishList)
    }

    // 가나다순 정렬
    const onKoreanSort = () => {
        let koreanList = [...vocabulary]
        koreanList.sort((a, b) => a.korean < b.korean ? -1 : 1)
        setSortList(koreanList)
    }

    // 카테고리별 정렬
    const onCategorySort = (e) => {
        setSelectOption(e.target.value)
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
                <p>총 {isSortList.length}개</p>

                <ul>
                    <li onClick={onEnglishSort}>알파벳순</li>
                    <li onClick={onKoreanSort}>가나다순</li>
                    <li>
                        <SelectBox
                            value={isSelectOption}
                            onChange={onCategorySort}
                            options={vocabularyCategory} />
                    </li>
                </ul>
            </div>

            <ul className="voca-list-item">
                {
                    isSortList.map((list, index) => {
                        return (
                            <li key={index}>
                                <h3>{list.category}</h3>
                                <p>{list.english}</p>
                                <p>{list.korean}</p>
                                <Button
                                    bgColor="#FFF"
                                    onClick={() => onDeleteVocabulary(index)}>
                                  Delete
                                </Button>
                            </li>
                        )
                    })
                }
            </ul>

            <Button
                bgColor="#FFE382"
                onClick={() => navigate('/category')}>
                Select vocabulary category
            </Button>
        </Layout>
    )
}

export default VocaList