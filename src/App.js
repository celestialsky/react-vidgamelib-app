import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import { routes } from './const/routes'

function App() {
  const components = {
    home: Home,
    consoles: Consoles,
    login: Login
  }

  return (
    <div className="App">
      <NavBar routes={routes}/>
      <Switch>
        <Route exact path='/' render = {() => <div>Root</div>} />
          {
            routes.map(route => {
              const ComponentName = components[route]
              return <Route exact path= {`/${route}`}  render = {() =>
                <ComponentName>
                this is the child
                </ ComponentName>} />
              }
            )
          }
      </Switch>
    </div>
  );
}

const Consoles = () =>
<div>
  I am the consoles component
</div>
const Home = (props) =>
<div>
  I am the {props.children} component
</div>
const Login = () =>
<div>
  I am the login component
</div>
export default App;
