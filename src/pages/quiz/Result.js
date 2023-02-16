import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const {record, koreaAnswer} = props

  const navigate = useNavigate()

  const correctAnswer = record.filter(x => koreaAnswer.includes(x))
  const wrongAnswer = record.filter(x => !koreaAnswer.includes(x))

  return (
    <div className="result">
      <Title>Finish your quiz</Title>

      <p>총 문제 수: {record.length}</p>
      <p>정답 갯수: {correctAnswer.length}</p>
      <p>오답 갯수: {wrongAnswer.length}</p>

      <Button onClick={() => navigate(-1)} bgColor="#2b2861">Again quiz</Button>
    </div>
  )
}

export default Result