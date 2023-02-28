import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from 'react-hook-form'
import {handleLogin} from '../../redux/user'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const Login = () => {
  // ** Hooks
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ** Redux States
  const users = useSelector(state => state.user.users)

  const {register, handleSubmit, watch, formState: {errors}} = useForm()
  const onSubmit = (data) => {
    const userId = users.find(user => user.loginId === data.loginId)
    const userPw = users.find(user => user.loginPassword === data.loginPassword)

    if (userId.length === 0) {
      alert('아이디가 틀렸습니다.')
    } else if (userPw.length === 0) {
      alert('비밀번호가 틀렸습니다.')
    } else {
      dispatch(handleLogin({
        loginId: data.loginId,
        loginPassword: data.loginPassword
      }))
      alert('로그인 되었습니다.')
      navigate('/category')
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
            })}/>
          {errors?.loginId?.type === 'required' && <span className="text-danger">아이디는 필수입니다.</span>}
          {
            users.filter(user => user.loginId === errors?.loginId).length === 0 && <span className="text-danger">아이디가 틀렸습니다.</span>
          }
        </div>

        <div>
          <h3>Password</h3>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요. (123)"
            {...register('loginPassword', {
              required: true
            })}/>
          {errors?.loginPassword?.type === 'required' && <span className="text-danger">비밀번호는 필수입니다.</span>}
          {
            users.filter(user => user.loginPassword === errors?.loginPassword).length === 0 && <span className="text-danger">비밀번호가 틀렸습니다.</span>
          }
        </div>

        <div className="login-form-btn">
          <Button type="submit" bgColor="#2b2861">Login</Button>
          <Button onClick={() => navigate('/join')} bgColor="#bbb">Easy Join</Button>
          <Button onClick={() => navigate('/joinForm')} bgColor="#bbb">Join</Button>
        </div>
      </form>
    </Layout>
  )
}

export default Login