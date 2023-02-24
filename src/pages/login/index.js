import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
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

  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const onSubmit = (data) => {
    console.log(JSON.stringify(data))

    const userId = users.filter(user => user.loginId === data.loginId)
    const userPw = users.filter(user => user.loginPassword === data.loginPassword)

    console.log(userId)
    console.log(userPw)

    if (userId.length === 0) {
      alert('아이디가 틀렸습니다.')
    } else if (userPw.length === 0) {
      alert('비밀번호가 틀렸습니다.')
    } else {
      dispatch(handleLogin({
        loginId: loginId.value,
        loginPassword: loginPassword.value
      }))
      // alert('로그인 되었습니다.')
      // navigate('/category')
    }
  }

  return (
    <Layout className="login">
      <Title>Welcome, vocabulary world</Title>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>ID</h3>
          <input
            type="text"
            placeholder="아이디를 입력해주세요. (test)"
            autoFocus
            {...register('loginId', {
              required: true
            })}
          />
          {errors?.loginId?.type === 'required' && <span className="text-danger">아이디를 입력해주세요.</span>}
          {errors?.loginId && <span className="text-danger">아이디가 틀렸습니다.</span>}
        </div>

        <div>
          <h3>Password</h3>
          <input
            type="text"
            placeholder="비밀번호를 입력해주세요. (123)"
            autoFocus
            {...register('loginPassword', {
              required: true
            })}
          />
          {errors?.loginPassword?.type === 'required' && <span className="text-danger">비밀번호를 입력해주세요.</span>}
        </div>

        <div className="login-form-btn">
          <Button type="submit" bgColor="#2b2861">Login</Button>
          <Button onClick={() => navigate('/join')} bgColor="#bbb">Easy Join</Button>
          <Button onClick={() => navigate('/joinForm')} bgColor="#bbb">Join</Button>
        </div>
      </form>


      {/*<div className="login-input">*/}
      {/*  <div>*/}
      {/*    <p>ID</p>*/}
      {/*    <Input type="text" onKeyPress={onEnter} placeholder="아이디를 입력해주세요. (test)" autoFocus {...loginId}/>*/}
      {/*  </div>*/}

      {/*  <div>*/}
      {/*    <p>Password</p>*/}
      {/*    <Input type="password" onKeyPress={onEnter} placeholder="비밀번호를 입력해주세요. (123)" {...loginPassword}/>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="login-btn">*/}
      {/*  <Button onClick={onLogin} bgColor="#2b2861">Login</Button>*/}
      {/*  <Button onClick={() => navigate('/join')} bgColor="#bbb">Easy Join</Button>*/}
      {/*  <Button onClick={() => navigate('/joinForm')} bgColor="#bbb">Join</Button>*/}
      {/*</div>*/}
    </Layout>
  )
}

export default Login