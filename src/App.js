import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Login from './pages/login'
import Join from './pages/join'
import MyPage from './pages/mypage'
import Category from './pages/category'
import QuizCreate from './pages/quizCreate'
import QuizList from './pages/quizList'
import Quiz from './pages/quiz'
import Error from './pages/error'
import {Reset} from 'styled-reset'
import './assets/scss/common.scss'

function App() {
  const loginUser = useSelector(state => state.user.loginUser)

  return (
    <>
      <Reset/>

      {
        loginUser !== null ? (
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/react-vocabulary" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/quizCreate" element={<QuizCreate/>}/>
            <Route path="/quizList" element={<QuizList/>}/>
            <Route path="/quiz/:category" element={<Quiz/>}/>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/react-vocabulary" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/mypage" element={<Error/>}/>
            <Route path="/category" element={<Error/>}/>
            <Route path="/quizCreate" element={<Error/>}/>
            <Route path="/quizList" element={<Error/>}/>
            <Route path="/quiz/:category" element={<Error/>}/>
          </Routes>
        )
      }
    </>
  )
}

export default App