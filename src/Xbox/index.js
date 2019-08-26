import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Xbox extends Component {
  state = {
    names: '',
    cover:'',
    games:[]
  }

  componentDidMount(){
    this.popularGames().then(data=>{
      console.log(data)
      this.setState({
        games: data.xbox
      })
    })
  }

  popularGames = async () => {
    try {

      const popResponse = await fetch('http://localhost:8000/xbox', {
        method: "GET",
        credentials: 'include'
      })
      const parsed = await popResponse.json()
      console.log(parsed)
      return parsed

    } catch(err) {
      console.log(err);
    }
  }

  render(){
    return(
    <div>
      Coming soon!<br/>
      <br/>
        {
          this.state.games.map((p,i)=>{
          return (
            <div>
              <b>{i + 1}. {p.name}- </b> {p.summary}<br/>

              <br/>

            </div>
          )
        })
      }
    </div>
  )
  }
}

export default Xbox;
