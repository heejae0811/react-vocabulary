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
      navigate('/quizList')
    }
  }

  const handelEnter = (e) => {
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
          <Input type="text" onKeyPress={handelEnter} placeholder="아이디를 입력해주세요. (test)" {...loginId}/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" onKeyPress={handelEnter} placeholder="비밀번호를 입력해주세요. (123)" {...loginPassword}/>
          {/*<Input type="password" value={isLoginPassword} onChange={e => setLoginPassword(e.target.value)} onKeyPress={handelEnter} placeholder="비밀번호를 입력해주세요. (123)"/>*/}
        </div>

        <Button onClick={onLogin} bgColor="#2b2861">Login</Button>
        <Button onClick={() => navigate('/join')} bgColor="#bbb">Make an account</Button>
      </div>
    </Layout>
  )
}

export default Login