import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import AuthPage from './pages/AuthPage'
import ChatsPage from './pages/ChatsPage'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/chats" element={<ChatsPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App