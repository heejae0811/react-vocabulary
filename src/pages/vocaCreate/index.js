import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'
import {handleCreateVocabulary} from '../../redux/vocabulary'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const VocaCreate = () => {
    // ** Hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // ** useForm
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data) => {
        if (window.confirm('새로운 단어를 등록하시겠습니까?')) {
            dispatch(handleCreateVocabulary({
                category: data.category,
                english: data.english,
                korean: data.korean
            }))
            navigate('/category')
        } else {
            return false
        }
    }

    return (
        <Layout className="voca-create">
            <Title>Create new vocabulary</Title>

            <form className="voca-create-input" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label for="category">Category</label>
                    <input
                        type="text"
                        id="category"
                        placeholder="카테고리를 입력해 주세요."
                        autoFocus
                        {...register('category', {
                            required: true
                        })}/>
                    {errors?.category?.type === 'required' && <span className="text-danger">카테고리는 필수입니다.</span>}
                </div>

                <div>
                    <label for="english">English</label>
                    <input
                        type="text"
                        id="english"
                        placeholder="영어 단어를 입력해 주세요."
                        {...register('english', {
                            required: true,
                            pattern: /^[a-z]+$/
                        })}/>
                    {errors?.english?.type === 'required' && <span className="text-danger">영어 단어는 필수입니다.</span>}
                    {errors?.english?.type === 'pattern' && <span className="text-danger">영어 소문자만 입력 가능합니다.</span>}
                </div>

                <div>
                    <label for="korean">Korean</label>
                    <input
                        type="text"
                        id="korean"
                        placeholder="한글 뜻을 입력해 주세요."
                        {...register('korean', {
                            required: true,
                            pattern: /^[ㄱ-ㅎ|가-힣]+$/
                        })}/>
                    {errors?.korean?.type === 'required' && <span className="text-danger">한글 뜻은 필수입니다.</span>}
                    {errors?.korean?.type === 'pattern' && <span className="text-danger">한글만 입력 가능합니다.</span>}
                </div>

                <div className="voca-create-btn">
                    <Button
                        type="submit"
                        bgColor="#394867"
                        color="#FFF">
                        Confirm
                    </Button>
                    <Button
                        bgColor="#DBDFEA"
                        onClick={() => navigate('/category')}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Layout>
    )
}

export default VocaCreate