import {useSelector} from 'react-redux'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

const QuizList = () => {
  const vocabulary = useSelector(state => state.vocabulary.vocabulary)

  console.log(vocabulary)

  return (
    <Layout className="quiz-list">
      <Title>Select vocabulary category</Title>

      <ul>
        {
          vocabulary.map((list, index) => {
            return (
              <li key={index}>{list.category}</li>
            )
          })
        }
      </ul>
    </Layout>
  )
}

export default QuizList