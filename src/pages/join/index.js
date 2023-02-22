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
  const userName = useInput()
  const userId = useInput()
  const userPassword = useInput()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCreateUser = () => {
    if (userName.value === '') {
      alert('이름을 입력해주세요.')
    } else if (userId.value === '') {
      alert('아이디를 입력해주세요.')
    } else if (userPassword.value === '') {
      alert('비밀번호를 입력해주세요.')
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
      <Title>Make your account</Title>

      <div className="input-area">
        <div>
          <p>Name</p>
          <Input type="text" onKeyPress={onEnter} placeholder="이름을 입력해주세요." {...userName}/>
        </div>

        <div>
          <p>ID</p>
          <Input type="text" onKeyPress={onEnter} placeholder="아이디를 입력해주세요." {...userId}/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" onKeyPress={onEnter} placeholder="비밀번호를 입력해주세요." {...userPassword}/>
        </div>

        <Button onClick={onCreateUser} bgColor="#2b2861">Confirm</Button>
        <Button onClick={() => navigate('/login')} bgColor="#bbb">Cancel</Button>
      </div>
    </Layout>
  )
}

export default Join