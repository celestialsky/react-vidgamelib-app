import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar'
import { Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';
import { routes } from './const/routes';
import Register from './Register';
console.log(Register)

function App() {
  const components = {
    home: Home,
    consoles: Consoles,
    login: Login,
    username: '',
    image: '',
    email: '',
    loading: true,
    register: Register
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

class Login extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const login = this.props.logIn(this.state);

    login.then((data) => {
      if(data.status.message === 'Success'){
        this.props.history.push('/profile')
      } else {
        console.log(data, this.props)
      }
    }).catch((err) => {
      console.log(err)
    })

  }
  render(){
    return (
      <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh'}}>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' textAlign='center'>
            Login
          </Header>
          <Form onSubmit={this.handleSubmit}>
              <Segment stacked>
              Email:
              <Form.Input fluid icon='mail' iconPosition='left' placeholder='Enter email' type='text' name='email' onChange={this.handleChange}/>
              password:
              <Form.Input fluid icon='lock' iconPosition='left' type='password' name='password' onChange={this.handleChange}/>
              <Button fluid size='large' type='sumbit'>Login</Button>

            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      )
  }
}



export default App;
