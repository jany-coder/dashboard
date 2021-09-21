import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
