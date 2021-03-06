import React, { Component } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios'




const StyledGrid = styled(Grid)`
 &&&{ 
   padding-top: 10px;
   padding-bottom: 10px;
   background-color: black;
 }
`

const StyledCard = styled(Card)`
  &&& {
    /* width: 600px;
    display: flex; */
    margin: auto; 
    justify-content: center;
    width: 320px;
    
    
  }
`;

const StyledImage = styled(Image)`
  width: 320px;
  height: 240px;
`;




export default class LandingPage extends Component {
  state = {
    players: [],
    stats: {}
  }

  componentDidMount = async () => {
    await this.fetchPlayers()
    await this.fetchStats()
  }

  fetchPlayers = async () => {
    const response = await axios.get('api/players')
    console.log(response)
    this.setState({ players: response.data })
  }

  fetchStats = async (id) => {
    const response = await axios.get(`https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/player_gamelogs.json?player=${id}/stats`)
    return response.data
  }




  render() {
    const playersList = this.state.players.map((player, i) => {
      return (
        
          <Grid.Column>
            <StyledCard>
              <StyledImage src={player.img} />
              <Card.Content>
                <Link to={`/players/${player.id}`}><Card.Header>{player.name}</Card.Header></Link>
              </Card.Content>
              <Card.Content extra>
                <a>Current Season Stats</a>
              </Card.Content>
            </StyledCard>
            </Grid.Column>
        

            
          
      )

    })
    const LandingPage =
      
      <StyledGrid>
        <Grid.Row columns={this.state.players.length}>
        {playersList}
         
        </Grid.Row>
      </StyledGrid>

      
    return (
      <div>
        {LandingPage}
        <Image fluid src="https://i.imgur.com/RNxrJiH.jpg"></Image>  
      
      </div>
    )
  }
}

