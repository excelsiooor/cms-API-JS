import './Styles/Main.css'
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
