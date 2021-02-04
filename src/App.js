import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Soy una aplicación de React que esta en un contenedor de Docker, me ves gracias al servidor NGINX y Google Cloud me esta hosteando :D
        </p>
        <p>Lo que no tengo idea es como se pone Django en modo producción :c</p>
      </header>
    </div>
  );
}

export default App;
