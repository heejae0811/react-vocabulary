import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const MyPage = () => {
    // ** Hooks
    const navigate = useNavigate()

    // ** Redux States
    const loginUser = useSelector(state => state.user.loginUser)

    return (
        <Layout className="my-page">
            <Title>My page</Title>

            <ul className="my-page-info">
                <li>
                    <h3>Name</h3>
                    <p>{loginUser.name}</p>
                </li>
                <li>
                    <h3>ID</h3>
                    <p>{loginUser.loginId}</p>
                </li>
                <li>
                    <h3>Password</h3>
                    <p>{loginUser.loginPassword}</p>
                </li>
            </ul>

            <ul className="my-page-record scroll">
                {
                    loginUser.quizRecord && loginUser.quizRecord.map((record, index) => {
                        return (
                            <li key={index}>
                                <p>카테고리 | {record.category}</p>
                                <p>퀴즈 푼 시간 | {record.time}</p>
                                <p>정답 | {record.correctAnswer}개</p>
                                <p>오답 | {record.wrongAnswer}개</p>
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

export default MyPage