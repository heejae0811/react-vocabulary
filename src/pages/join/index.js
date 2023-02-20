import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handelCreateUser} from '../../redux/user'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Join = () => {
  const [isName, setName] = useState('')
  const [isId, setId] = useState('')
  const [isPassword, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCreateUser = () => {
    if (isName === '') {
      alert('이름을 입력해주세요.')
    } else if (isId === '') {
      alert('아이디를 입력해주세요.')
    } else if (isPassword === '') {
      alert('비밀번호를 입력해주세요.')
    } else {
      if (window.confirm('회원가입을 하시겠습니까?')) {
        dispatch(handelCreateUser({
          name: isName,
          loginId: isId,
          loginPassword: isPassword
        }))
        navigate('/login')
      } else {
        return false
      }
    }
  }

  return (
    <Layout className="join">
      <Title>Make your account</Title>

      <div className="input-area">
        <div>
          <p>Name</p>
          <Input type="text" value={isName} onChange={e => setName(e.target.value)} placeholder="이름을 입력해주세요."/>
        </div>

        <div>
          <p>ID</p>
          <Input type="text" value={isId} onChange={e => setId(e.target.value)} placeholder="아이디를 입력해주세요."/>
        </div>

        <div>
          <p>Password</p>
          <Input type="password" value={isPassword} onChange={e => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요."/>
        </div>

        <Button onClick={onCreateUser} bgColor="#2b2861">Confirm</Button>
        <Button onClick={() => navigate('/login')} bgColor="#bbb">Cancel</Button>
      </div>
    </Layout>
  )
}

export default Join