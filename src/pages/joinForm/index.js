import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {handelCreateUser} from '../../redux/user'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const JoinForm = () => {
    // ** Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // useForm 사용해서 validation 처리
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        // alert(JSON.stringify(data))

        if (window.confirm('회원가입을 하시겠습니까?')) {
            dispatch(handelCreateUser({
                loginId: data.loginId,
                loginPassword: data.loginPassword,
                name: data.name,
                email: data.email,
                phoneNumber: data.phoneNumber
            }))
            navigate('/login')
        } else {
            return false
        }
    }

    return (
        <Layout className="join">
            <Title>Join (useForm)</Title>

            <form
                className="join-form"
                onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="loginId">ID</label>
                    <input
                        type="text"
                        id="loginId"
                        placeholder="아이디를 입력해 주세요."
                        autoFocus
                        {...register('loginId', {
                            required: true,
                            minLength: 2,
                            maxLength: 10,
                            pattern: /^[A-Za-z]+$/
                        })}/>
                    {errors?.loginId?.type === 'required' && <span className="text-danger">아이디는 필수입니다.</span>}
                    {errors?.loginId?.type === 'minLength' && <span className="text-danger">아이디는 2글자 이상입니다.</span>}
                    {errors?.loginId?.type === 'maxLength' && <span className="text-danger">아이디는 10글자 이하입니다.</span>}
                    {errors?.loginId?.type === 'pattern' && <span className="text-danger">아이디는 영어만 가능합니다.</span>}
                </div>

                <div>
                    <label for="loginPw">Password</label>
                    <input
                        type="password"
                        id="loginPw"
                        placeholder="비밀번호를 입력해 주세요."
                        {...register('loginPassword', {
                            required: true,
                            minLength: 2,
                            maxLength: 10,
                            pattern: /^[0-9]+$/
                        })}/>
                    {errors?.loginPassword?.type === 'required' && <span className="text-danger">비밀번호는 필수입니다.</span>}
                    {errors?.loginPassword?.type === 'minLength' && <span className="text-danger">비밀번호는 2글자 이상입니다.</span>}
                    {errors?.loginPassword?.type === 'maxLength' && <span className="text-danger">비밀번호는 10글자 이하입니다.</span>}
                    {errors?.loginPassword?.type === 'pattern' && <span className="text-danger">비밀번호는 숫자만 가능합니다.</span>}
                </div>

                <div>
                    <label for="loginName">Name</label>
                    <input
                        type="text"
                        id="loginName"
                        placeholder="이름 입력해 주세요."
                        {...register('name', {
                            required: true,
                            pattern: /^[ㄱ-ㅎ|가-힣]+$/
                        })}/>
                    {errors?.name?.type === 'required' && <span className="text-danger">이름은 필수입니다.</span>}
                    {errors?.name?.type === 'pattern' && <span className="text-danger">이름은 한글만 가능합니다.</span>}
                </div>

                <div>
                    <label for="loginEmail">E-mail</label>
                    <input
                        type="text"
                        id="loginEmail"
                        placeholder="이메일을 입력해 주세요."
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Za-z0-9]+@[A-Za-z0-9.]+$/
                        })}/>
                    {errors?.email?.type === 'required' && <span className="text-danger">이메일은 필수입니다.</span>}
                    {errors?.email?.type === 'pattern' && <span className="text-danger">@가 포함된 이메일 형식만 가능합니다.</span>}
                </div>

                <div>
                    <label for="loginNumber">Number</label>
                    <input
                        type="text"
                        id="loginNumber"
                        placeholder="전화번호를 입력해 주세요."
                        {...register('phoneNumber', {
                            required: true,
                            pattern: /^\d{2,3}-\d{3,4}-\d{3,4}/i
                        })}/>
                    {errors?.phoneNumber?.type === 'required' && <span className="text-danger">전화번호는 필수입니다.</span>}
                    {errors?.phoneNumber?.type === 'pattern' && <span className="text-danger">-가 포함된 전화번호 형식만 가능합니다.</span>}
                </div>

                <div className="join-form-btn">
                    <Button
                        type="submit"
                        bgColor="#394867"
                        color="#FFF">
                        Confirm
                    </Button>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={() => navigate('/login')}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Layout>
    )
}

export default JoinForm