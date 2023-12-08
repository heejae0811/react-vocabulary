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
            <Button
                bgColor="#394867"
                onClick={() => navigate('/login')}>
                Go to Login
            </Button>
        </Layout>
    )
}

export default Error