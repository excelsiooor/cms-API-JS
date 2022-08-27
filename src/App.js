import {BrowserRouter} from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Navbar from './components/UI/Navbar/Navbar';
import './Styles/css/App.css'

function App() {

  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
