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

    // ** useForm
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        dispatch(handleLogin({
            loginId: data.loginId,
            loginPassword: data.loginPassword
        }))
        alert('로그인 되었습니다.')
        navigate('/category')
    }

    return (
        <Layout className="login">
            <Title>Welcome, vocabulary world</Title>

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="loginId">ID</label>
                    <input
                        type="text"
                        id="loginId"
                        placeholder="아이디를 입력해 주세요. (test)"
                        autoFocus
                        {...register('loginId', {
                            required: true,
                            validate: (value, forValues) => users.filter(user => user.loginId === value).length !== 0
                        })}/>
                    {errors?.loginId?.type === 'required' && <span className="text-danger">아이디는 필수입니다.</span>}
                    {errors?.loginId?.type === 'validate' && <span className="text-danger">아이디가 틀렸습니다.</span>}
                </div>

                <div>
                    <label for="loginPw">Password</label>
                    <input
                        type="password"
                        id="loginPw"
                        placeholder="비밀번호를 입력해 주세요. (123)"
                        {...register('loginPassword', {
                            required: true,
                            validate: (value, forValues) => users.filter(user => user.loginPassword === value).length !== 0
                        })}/>
                    {errors?.loginPassword?.type === 'required' && <span className="text-danger">비밀번호는 필수입니다.</span>}
                    {errors?.loginPassword?.type === 'validate' && <span className="text-danger">비밀번호가 틀렸습니다.</span>}
                </div>

                <div className="login-form-btn">
                    <Button
                        type="submit"
                        bgColor="#394867"
                        color="#FFF">
                        Login
                    </Button>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={() => navigate('/join')}>
                        Easy Join
                    </Button>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={() => navigate('/joinForm')}>
                        Join
                    </Button>
                </div>
            </form>
        </Layout>
    )
}

export default Login