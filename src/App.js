import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Join from './pages/join'
import Mypage from './pages/mypage'
import Quiz from './pages/quiz'
import QuizList from './pages/quizList'
import QuizCreate from './pages/quizCreate'
import {Reset} from 'styled-reset'
import './assets/scss/common.scss'

function App() {
  return (
    <>
      <Reset/>

      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/" element={<Quiz/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quizList" element={<QuizList/>}/>
        <Route path="/quizCreate" element={<QuizCreate/>}/>
      </Routes>
    </>
  )
}

export default App