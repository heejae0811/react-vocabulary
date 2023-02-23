import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogin} from '../../redux/user'
import useInput from '../../hooks/useInput'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Login = () => {
  const loginId = useInput()
  const loginPassword = useInput()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)

  console.log(users)

  const onLogin = () => {
    const userId = users.filter(user => user.loginId === loginId.value)
    const userPw = users.filter(user => user.loginPassword === loginPassword.value)

    if (loginId.value === '') {
      alert('아이디를 입력해주세요.')
    } else if (loginPassword.value === '') {
      alert('비밀번호를 입력해주세요.')
    } else if (userId.length === 0) {
      alert('아이디가 틀렸습니다.')
    } else if (userPw.length === 0) {
      alert('비밀번호가 틀렸습니다.')
    } else {
      dispatch(handleLogin({
        loginId: loginId.value,
        loginPassword: loginPassword.value
      }))
      alert('로그인 되었습니다.')
      navigate('/category')
    }
  }

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onLogin()
    }
  }

  return (
    <Layout className="login">
      <Title>Welcome, vocabulary world</Title>

      <div className="input-area">
        <div>
          <p>ID</p>
          <Input type="text" onKeyPress={onEnter} placeholder="아이디를 입력해주세요. (test)" autoFocus {...loginId}/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" onKeyPress={onEnter} placeholder="비밀번호를 입력해주세요. (123)" {...loginPassword}/>
        </div>
      </div>

      <div className="btn-area">
        <Button onClick={onLogin} bgColor="#2b2861">Login</Button>
        <Button onClick={() => navigate('/join')} bgColor="#bbb">Easy Join</Button>
        <Button onClick={() => navigate('/validation')} bgColor="#bbb">Join</Button>
      </div>
    </Layout>
  )
}

export default Login