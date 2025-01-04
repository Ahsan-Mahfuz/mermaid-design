import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import CheckEmail from './pages/CheckEmail'
import SetNewPassword from './pages/SetNewPassword'
import HeroSectionPage from './pages/HeroSectionPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />
      <Route path="/checkEmail" element={<CheckEmail />} />
      <Route path="/setNewPassword" element={<SetNewPassword />} />
      <Route path="/mermaids/*" element={<HeroSectionPage />} />
    </Routes>
  )
}

export default App
