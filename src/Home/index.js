import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Dropdown} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    names: '',
    cover:'',
    games:[]
  }

  componentDidMount(){
    this.popularGames().then(data=>{
      console.log(data)
      this.setState({
        games: data.games
      })
    })
  }

  popularGames = async () => {
    try {

      const popResponse = await fetch('http://localhost:8000/games', {
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
      Top 50 Most Popular Games<br/>
      <br/>
        {
          this.state.games.map((g,i)=>{
            const color = Math.round(g.aggregated_rating) > 50 ? "green" : "red"
          return (
            <div>
              <b>{i + 1}. {g.name}</b> - {g.summary}<br/>
              <b>Critic rating: </b><i style={{"color": color}}>{isNaN(g.aggregated_rating) ? "Not Reviewed" : Math.round(g.aggregated_rating)  }</i><br/>
              <br/>

            </div>
          )
        })
      }
    </div>
  )
  }
}

export default Home;
