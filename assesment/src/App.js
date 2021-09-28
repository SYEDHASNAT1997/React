
import './App.css';
import { Route, Switch } from "react-router-dom"
import { UserView } from './Components/UserView';
import { Admin } from './Components/Admin';

function App() {
  const data=[
    {
    id:'e1',
    Name:'',
    Degree:'',
    CGPA:'',
    skills:'',
    post:'',

  
  }
  ]
  return (
    <div className="App">
      <Switch>
        <Route exact rpath="/" component={UserView} />
        <Route exact path='/Admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
