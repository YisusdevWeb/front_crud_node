import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<h1>hola </h1>}></Route>
       <Route path="/login" element={<LoginPage />}></Route>
       <Route path="/register" element={<RegisterPage />}></Route>
       <Route path="/admin" element={<h1>holaadmn </h1>}></Route>

    </Routes>
    </BrowserRouter>
  )
}
