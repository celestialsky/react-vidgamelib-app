import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import { Button, Form, Grid, Header, Image, Message, Segment, Dropdown} from 'semantic-ui-react';
import { routes } from './const/routes';
import Login from './Login';
import Register from './Register';
import Profile from './Profile'
import Home from './Home'
import Playstation from './PS'
import Xbox from './Xbox'

class App extends Component {
  state = {
    username: '',
    email: '',
    search: '',
    results: [],
    loading: true
  }

  logIn = async (loginInfo) => {
      try {

        const loginResponse = await fetch('http://localhost:8000/user/login', {
          method: 'POST',
          credentials: 'include',// on every request we have to send the cookie
          body: JSON.stringify(loginInfo),
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const parsedResponse = await loginResponse.json();

        this.setState(() => {
          return {
            ...parsedResponse.data,
            loading: false
          }
        })

        return parsedResponse

      } catch (err) {
        console.log(err)
      }
    }

      register = async (data) => {
          console.log("registering user")
           try {

            const registerResponse = await fetch('http://localhost:8000/user/register', {
              method: 'POST',
              credentials: 'include',// on every request we have to send the cookie
              body: data,
              headers: {
                'enctype': 'multipart/form-data'
              }
            })
            console.log('finished fetching')
            console.log(registerResponse)
            const parsedResponse = await registerResponse.json();
            console.log(parsedResponse, "<===this is the parsed response")

            this.setState({
              ...parsedResponse.data,
              loading: false
            })
            return parsedResponse;

          } catch (err) {
            console.log(err)
          }
        }


  render(){
      return (
        <main>
        <NavBar routes={routes}/>
        <Switch>
            <Route exact path="/home" render={() => <Home/>} />
            <Route exact path="/ps" render={() => <Playstation/>} />
            <Route exact path="/xbox" render={() => <Xbox/>} />
            <Route exact path="/login" render={(props) => <Login {...props} logIn={this.logIn} />} />
            <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
            <Route exact path="/profile" render={(props) =>  <Profile {...props} userInfo={this.state}/> } />
            <Route exact path="/sign up" render={(props) => <Register {...props} register={this.register} /> } />
          </Switch>
        </main>
    );
  }
}



export default App;
