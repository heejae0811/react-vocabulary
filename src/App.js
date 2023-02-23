import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Validation from './pages/validation'
import Login from './pages/login'
import Join from './pages/join'
import MyPage from './pages/mypage'
import Category from './pages/category'
import VocaCreate from './pages/vocaCreate'
import VocaList from './pages/vocaList'
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
            <Route path="/validation" element={<Validation/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/vocaCreate" element={<VocaCreate/>}/>
            <Route path="/vocaList" element={<VocaList/>}/>
            <Route path="/quiz/:category" element={<Quiz/>}/>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/react-vocabulary" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/validation" element={<Validation/>}/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/mypage" element={<Error/>}/>
            <Route path="/category" element={<Error/>}/>
            <Route path="/vocaCreate" element={<Error/>}/>
            <Route path="/vocaList" element={<Error/>}/>
            <Route path="/quiz/:category" element={<Error/>}/>
          </Routes>
        )
      }
    </>
  )
}

export default App