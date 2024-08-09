import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import './styles/App.css';
import { useUserData, useUserDispatch } from './contexts/UserContext';
import Template from "./pages/_TemplagePage";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0)

  const [formUsername, setFormUsername] = useState("");
  const [formPassword, setFormPassword] = useState("");

  const {makeSignupRequest} = useUserDispatch();

  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
