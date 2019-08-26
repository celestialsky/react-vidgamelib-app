import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Card, Icon} from 'semantic-ui-react';
class Profile extends Component {
  state = {
     id: 1,
     email: '',
     username: ''
    }

  render(){
    console.log(this.state, this.props.userInfo, 'in profile< props')

    return (
      <Grid columns={2} padded style={{ height: '100vh'}}>
        <Grid.Row>
          <Grid.Column width={4}>
            {
              this.props.userInfo.loading ?
              'Loading.....' :

              <Card
                header={this.props.username}
                meta={this.props.email}
                style={{'marginLeft': '5vw'}}
                />
             }
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h2' textAlign='center'>
              {this.props.userInfo.username} Watchlist
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}
export default Profile;
