import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handelCreateUser} from '../../redux/user'
import useInput from '../../hooks/useInput'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Join = () => {
    // ** Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // ** Custom Hooks
    const userName = useInput()
    const userId = useInput()
    const userPassword = useInput()

    const onCreateUser = () => {
        if (userName.value === '') {
            alert('이름을 입력해 주세요.')
        } else if (userId.value === '') {
            alert('아이디를 입력해 주세요.')
        } else if (userPassword.value === '') {
            alert('비밀번호를 입력해 주세요.')
        } else {
            if (window.confirm('회원가입을 하시겠습니까?')) {
                dispatch(handelCreateUser({
                    name: userName.value,
                    loginId: userId.value,
                    loginPassword: userPassword.value
                }))
                navigate('/login')
            } else {
                return false
            }
        }
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            onCreateUser()
        }
    }

    return (
        <Layout className="join">
            <Title>Join (custom hook)</Title>

            <form className="join-form">
                <div>
                    <label for="loginName">Name</label>
                    <Input
                        type="text"
                        id="loginName"
                        onKeyPress={onEnter}
                        placeholder="이름을 입력해 주세요."
                        {...userName}
                        autoFocus />
                </div>

                <div>
                    <label for="loginId">ID</label>
                    <Input
                        type="text"
                        id="loginId"
                        onKeyPress={onEnter}
                        placeholder="아이디를 입력해 주세요."
                        {...userId} />
                </div>

                <div>
                    <label for="loginPw">Password</label>
                    <Input
                        type="password"
                        id="loginPw"
                        onKeyPress={onEnter}
                        placeholder="비밀번호를 입력해 주세요."
                        {...userPassword} />
                </div>

                <div className="join-form-btn">
                    <Button
                        bgColor="#394867"
                        color="#FFF"
                        onClick={onCreateUser}>
                        Confirm
                    </Button>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={() => navigate('/login')}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Layout>
    )
}

export default Join