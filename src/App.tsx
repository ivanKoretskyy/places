import './App.scss';
import { BrowserRouter as Router} from 'react-router-dom';
import { Nav } from './common/Nav/Nav';
import { AuthContextProvider } from './context/AuthContext';
import { Pages } from './Pages';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Nav/>
        <Pages/>
      </Router>
    </AuthContextProvider>

  );
}

export default App;
