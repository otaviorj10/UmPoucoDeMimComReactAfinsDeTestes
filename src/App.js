import './App.css';
import { HeaderMenu } from './Components/HeaderMenu';
import { Body } from './Components/Body';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; // importação para rotas
import { Sobre } from './View/Sobre';
import { Descricao } from './View/Descricao';

function App() {
  return (
    <div className="App">
      <Router>
      <HeaderMenu />
      {/* <Body /> */}
        <Routes>
          {<Route path="/Sobre"
            element={<Sobre />} />
          }
        </Routes>

        <Routes>
          {<Route path="/Descricao"
            element={<Descricao />} />
          }
        </Routes>
      </Router>

    </div>

  );
}

export default App;
