import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const navigate = useNavigate()

  return (
    <div className="result">
      <Title>Finish your quiz</Title>

      <Button onClick={() => navigate(-1)} bgColor="#2b2861">Again quiz</Button>
    </div>
  )
}

export default Result