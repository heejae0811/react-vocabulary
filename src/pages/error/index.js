import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Layout from '../../components/Layout'

const Error = () => {
    // ** Hooks
    const navigate = useNavigate()

    return (
        <Layout>
            <Title>You should login first</Title>
            <Button onClick={() => navigate('/login')} bgColor="#2b2861">Go to Login</Button>
        </Layout>
    )
}

export default Error