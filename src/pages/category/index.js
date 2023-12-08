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

            <ul>
                {
                    vocabularyCategory.map((category, index) => {
                        return (
                            <li key={index}>
                                <p>{category}</p>
                                <div>
                                    <Button
                                        bgColor="#FFF"
                                        onClick={() => onEnDetailNavigate(category)}>
                                        English
                                    </Button>
                                    <Button
                                        bgColor="#FFF"
                                        onClick={() => onKrDetailNavigate(category)}>
                                        Korean
                                    </Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="category-btn">
                <Button
                    bgColor="#394867"
                    color="#FFF"
                    onClick={() => navigate('/vocaCreate')}>
                    Create new vocabulary
                </Button>
                <Button
                    bgColor="#FFE382"
                    onClick={() => navigate('/vocaList')}>
                    All vocabulary list
                </Button>
                <div>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={() => navigate('/mypage')}>
                        My page
                    </Button>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={onLogout}>
                        Logout
                    </Button>
                </div>
            </div>
        </Layout>
    )
}

export default Category