import {useNavigate} from 'react-router'
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './index.scss'

const Join = () => {
  const navigate = useNavigate()

  return (
    <div className="join wrap">
      <div className="inner">
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

          <Button bgColor="#2b2861">Confirm</Button>
          <Button onClick={() => navigate('/login')} bgColor="#bbb">Cancle</Button>
        </div>
      </div>
    </div>
  )
}

export default Join