import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogin} from '../../redux/user'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Login = () => {
  const [isLoginId, setLoginId] = useState('')
  const [isLoginPw, setLoginPw] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  const loginUser = useSelector(state => state.user.loginUser)

  const onLogin = () => {
    const userId = users.filter(user => user.loginId === isLoginId)
    const userPw = users.filter(user => user.loginPw === isLoginPw)

    if (isLoginId === '') {
      alert('아이디를 입력해주세요.')
    } else if (isLoginPw === '') {
      alert('비밀번호를 입력해주세요.')
    } else if (userId.length === 0) {
      alert('아이디가 틀렸습니다.')
    } else if (userPw.length === 0) {
      alert('비밀번호가 틀렸습니다.')
    } else {
      dispatch(handleLogin({
        loginId: isLoginId,
        loginPw: isLoginPw
      }))
      alert('로그인 되었습니다.')
      navigate('/quizList')
    }
  }

  return (
    <Layout className="login">
      <Title>Welcome, vocabulary world</Title>

      <div className="input-area">
        <div>
          <p>ID</p>
          <Input type="text" value={isLoginId} onChange={e => setLoginId(e.target.value)} placeholder="아이디를 입력해주세요."/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" value={isLoginPw} onChange={e => setLoginPw(e.target.value)} placeholder="비밀번호를 입력해주세요."/>
        </div>

        <Button onClick={onLogin} bgColor="#2b2861">Login</Button>
        <Button onClick={() => navigate('/join')} bgColor="#bbb">Make an account</Button>
      </div>
    </Layout>
  )
}

export default Login