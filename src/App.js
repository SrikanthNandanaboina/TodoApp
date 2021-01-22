import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import "./App.css";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
