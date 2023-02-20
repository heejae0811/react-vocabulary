import {useNavigate} from 'react-router'
import Button from '../../components/Button'
import Title from '../../components/Title'

const Result = props => {
  const {record, koreaAnswer} = props

  const navigate = useNavigate()

  const correctAnswer = record.filter(list => koreaAnswer.includes(list))
  const wrongAnswer = record.filter(list => !koreaAnswer.includes(list))

  return (
    <div className="result">
      <Title>Finish your quiz</Title>

      <ul>
        <li>
          <h3>총 문제 수</h3>
          <p>{record.length}</p>
        </li>
        <li>
          <h3>정답 갯수</h3>
          <p>{correctAnswer.length}</p>
        </li>
        <li>
          <h3>오답 갯수</h3>
          <p>{wrongAnswer.length}</p>
        </li>
      </ul>

      <Button onClick={() => navigate(-1)} bgColor="#2b2861">Again quiz</Button>
    </div>
  )
}

export default Result