import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {handelCreateUser} from '../../redux/user'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const JoinForm = () => {
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="join-form scroll">
          <div>
            <h3>ID</h3>
            <input
              type="text"
              placeholder="아이디를 입력해주세요."
              autoFocus
              {...register('loginId', {
                required: true,
                minLength: 2,
                maxLength: 10,
                pattern: /^[A-Za-z]+$/
              })}/>
            {errors?.loginId?.type === 'required' && <p>아이디는 필수입니다.</p>}
            {errors?.loginId?.type === 'minLength' && <p>아이디는 2글자 이상입니다.</p>}
            {errors?.loginId?.type === 'maxLength' && <p>아이디는 10글자 이하입니다.</p>}
            {errors?.loginId?.type === 'pattern' && <p>아이디는 영어만 가능합니다.</p>}
          </div>

          <div>
            <h3>Password</h3>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register('loginPassword', {
                required: true,
                minLength: 2,
                maxLength: 10,
                pattern: /^[0-9]+$/
              })}/>
            {errors?.loginPassword?.type === 'required' && <p>비밀번호는 필수입니다.</p>}
            {errors?.loginPassword?.type === 'minLength' && <p>비밀번호는 2글자 이상입니다.</p>}
            {errors?.loginPassword?.type === 'maxLength' && <p>비밀번호는 10글자 이하입니다.</p>}
            {errors?.loginPassword?.type === 'pattern' && <p>비밀번호는 숫자만 가능합니다.</p>}
          </div>

          <div>
            <h3>Name</h3>
            <input
              type="text"
              placeholder="이름 입력해주세요."
              {...register('name', {
                required: true,
                pattern: /^[ㄱ-ㅎ|가-힣]+$/
              })}/>
            {errors?.name?.type === 'required' && <p>이름은 필수입니다.</p>}
            {errors?.name?.type === 'pattern' && <p>이름은 한글만 가능합니다.</p>}
          </div>

          <div>
            <h3>E-mail</h3>
            <input
              type="text"
              placeholder="이메일을 입력해주세요."
              {...register('email', {
                required: true,
                pattern: /^[A-Za-z0-9]+@[A-Za-z0-9.]+$/
              })}/>
            {errors?.email?.type === 'required' && <p>이메일은 필수입니다.</p>}
            {errors?.email?.type === 'pattern' && <p>@가 포함된 이메일 형식만 가능합니다.</p>}
          </div>

          <div>
            <h3>Number</h3>
            <input
              type="text"
              placeholder="전화번호를 입력해주세요."
              {...register('phoneNumber', {
                required: true,
                pattern: /^\d{2,3}-\d{3,4}-\d{3,4}/i
              })}/>
            {errors?.phoneNumber?.type === 'required' && <p>전화번호는 필수입니다.</p>}
            {errors?.phoneNumber?.type === 'pattern' && <p>-가 포함된 전화번호 형식만 가능합니다.</p>}
          </div>
        </div>

        <div className="join-form-btn">
          <Button type="submit" bgColor="#2b2861">Confirm</Button>
          <Button onClick={() => navigate('/login')} bgColor="#bbb">Cancel</Button>
        </div>
      </form>
    </Layout>
  )
}

export default JoinForm