import {useNavigate} from 'react-router'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './index.scss'

const Login = () => {
  const navigate = useNavigate()

  return (
    <Layout className="login">
      <Title>Welcome, vocabulary world</Title>

      <div className="input-area">
        <div>
          <p>ID</p>
          <Input type="text" placeholder="아이디를 입력해주세요."/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" placeholder="비밀번호를 입력해주세요."/>
        </div>

        <Button onClick={() => navigate('/quizList')} bgColor="#2b2861">Login</Button>
        <Button onClick={() => navigate('/join')} bgColor="#bbb">Make an account</Button>
      </div>
    </Layout>
  )
}

export default Login