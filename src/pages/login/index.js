import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './index.scss'

const Login = () => {
  return (
    <div className="login wrap">
      <div className="inner">
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

          <Button bgColor="#2b2861">로그인</Button>
          <Button bgColor="#bbb">회원가입 하기</Button>
        </div>
      </div>
    </div>
  )
}

export default Login