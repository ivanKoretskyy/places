import './App.scss';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Users } from './Users/Users';
import { Places } from './Places/Places';
import { NewUser } from './Users';
import { Nav } from './common/Nav/Nav';

function App() {
  return (
   <Router>
    <Nav/>
     <Routes>
       <Route path='/places' element={<Places/>} />
       <Route path='/' element={<Users/>} />
       <Route path='/users/:userId/places' element={<Places/>} />
       <Route path='/users/new' element={<NewUser/>} />
     </Routes>
   </Router>
  );
}

export default App;
