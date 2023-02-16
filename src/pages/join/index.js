import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Join = () => {
  const navigate = useNavigate()

  return (
    <Layout className="join">
      <Title>Make your account</Title>

      <div className="input-area">
        <div>
          <p>Name</p>
          <Input type="text" placeholder="이름을 입력해주세요."/>
        </div>

        <div>
          <p>ID</p>
          <Input type="text" placeholder="아이디를 입력해주세요."/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" placeholder="비밀번호를 입력해주세요."/>
        </div>

        <Button onClick={() => navigate('/login')} bgColor="#2b2861">Confirm</Button>
        <Button onClick={() => navigate('/login')} bgColor="#bbb">Cancle</Button>
      </div>
    </Layout>
  )
}

export default Join