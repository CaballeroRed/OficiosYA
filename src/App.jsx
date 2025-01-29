import './App.css';
import Header from './components/header'; // Importamos el componente Header
import Home from './components/Home'; // Importamos el componente Home
import FormTécnico from './components/FormTecnico'; // Formulario para técnicos
import FormCliente from './components/FormCliente'; // Formulario para clientes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Cambié Switch por Routes y Route

function App() {
  return (
    <Router>
      <div className="App">
        <Header />  {/* Usamos el componente Header */}

        <Routes> {/* Cambié Switch por Routes */}
          <Route path="/" element={<Home />} />  {/* Usamos element en vez de component */}
          <Route path="/registro-tecnico" element={<FormTécnico />} />  {/* Usamos element */}
          <Route path="/registro-cliente" element={<FormCliente />} />  {/* Usamos element */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;