
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FormBuilderHome from './components/FormBuilderHome';
import Display from './components/Display';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<FormBuilderHome/>}/>
        <Route exact path='/display'  element={<Display/>}/>
      </Routes>
    </Router>
  );
}

export default App;
