import logo from './logo.svg';
import {Redirect, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Route path="*">
      <Redirect to="/" />
    </Route>
  );
}

export default App;
