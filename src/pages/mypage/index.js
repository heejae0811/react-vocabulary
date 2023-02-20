import {useSelector} from 'react-redux'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import './index.scss'

const MyPage = () => {
  const loginUser = useSelector(state => state.user.loginUser)

  return (
    <Layout className="myPage">
      <Title>My page</Title>

      <ul>
        <li>
          <h3>Name</h3>
          <p>{loginUser.name}</p>
        </li>
        <li>
          <h3>ID</h3>
          <p>{loginUser.loginId}</p>
        </li>
        <li>
          <h3>Password</h3>
          <p>{loginUser.loginPassword}</p>
        </li>
      </ul>
    </Layout>
  )
}

export default MyPage