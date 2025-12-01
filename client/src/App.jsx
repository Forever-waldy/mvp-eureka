import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Register from "./pages/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={ <> <Header /> <Home /> </> } />
      <Route path="/login" element={ <> <Login /> </> } />
      <Route path="/register" element={<> <Register/> </>} />
    </Routes>  
  </BrowserRouter>
}

export default App
