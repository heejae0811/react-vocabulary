import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Join from './pages/join'
import MyPage from './pages/mypage'
import QuizList from './pages/quizList'
import QuizCreate from './pages/quizCreate'
import Quiz from './pages/quiz'
import {Reset} from 'styled-reset'
import './assets/scss/common.scss'

function App() {
  return (
    <>
      <Reset/>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/react-vocabulary" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/quizList" element={<QuizList/>}/>
        <Route path="/quizCreate" element={<QuizCreate/>}/>
        <Route path="/quiz/:category" element={<Quiz/>}/>
      </Routes>
    </>
  )
}

export default App