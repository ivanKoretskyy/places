import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Users } from './Users/Users';
import { Places } from './Places/Places';

function App() {
  return (
   <Router>
     <Routes>
       <Route path='/places' element={<Places/>} />
       <Route path='/'          element={<Users/>} />
     </Routes>
   </Router>
  );
}

export default App;
