import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Layout from '../../components/Layout'

const Error = () => {
  const navigate = useNavigate()

  return (
    <Layout className="Error">
      <Title>You should login.</Title>
      <Button onClick={() => navigate('/login')} bgColor="#2b2861">Go to Login</Button>
    </Layout>
  )
}

export default Error