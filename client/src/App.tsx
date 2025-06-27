import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Produtos from './pages/produtos'
import AuthPage from './pages/auth'
import CreateProduto from './pages/create-product'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<CreateProduto />}></Route>
        <Route path="/auth" element={<AuthPage />}></Route>
        <Route path="/produtos" element={<Produtos />}>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
