import { Route, Routes } from "react-router-dom";
import './styles/App.css';
import Template from "./pages/_TemplagePage";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route path="inventory" element={<InventoryPage />} />
      </Route>
    </Routes>
  )
}

export default App
