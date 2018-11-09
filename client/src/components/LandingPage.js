import React, { Component } from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios'

// const StyledPage = styled.div`
//   background: red;
//   background-size: 100%;
// `

const StyledGrid = styled(Grid)`
 &&&{ 
   padding-top: 150px;
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


//call Rails API to get players (/api/players)
//map through players
//create Card for each player

// render result of map function

//make a function 
//within the function make an axios call(get request)
//still within the function, set that state

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
                {/* <Card.Meta>Drafted in 2008</Card.Meta> */}
                {/* <Card.Description>"TRIPLE-DOUBLE KING"</Card.Description> */}
              </Card.Content>
              <Card.Content extra>
                <a>Current Season Stats</a>
              </Card.Content>
            </StyledCard>
            </Grid.Column>
          
      )

    })
    const LandingPage =
      // <StyledPage>
      <StyledGrid>
        <Grid.Row columns={this.state.players.length}>
        {playersList}
         
        </Grid.Row>
      </StyledGrid>

      //</StyledPage>
    return (
      <div>
        {LandingPage}
      </div>
    )
  }
}

{/* <Grid.Column>
<StyledCard>
  <StyledImage src="https://i.imgur.com/QdF9klJ.jpg" />
  <Card.Content>
    <Link to='/player'><Card.Header>Russell Westbrook</Card.Header></Link>
    <Card.Meta>Drafted in 2008</Card.Meta>
    <Card.Description>"TRIPLE-DOUBLE KING"</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>Current Season Stats</a>
  </Card.Content>
</StyledCard>
</Grid.Column>
<Grid.Column>
<StyledCard>
  <StyledImage src="https://i.imgur.com/YFSvdgl.jpg" />
  <Card.Content>
    <Card.Header>James Harden</Card.Header>
    <Card.Meta>Drafted in 2009</Card.Meta>
    <Card.Description>"THE BEARD"</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>Current Season Stats</a>
  </Card.Content>
</StyledCard>
</Grid.Column>
<Grid.Column>
<StyledCard>
  <StyledImage src="https://i.imgur.com/WP9N9Ct.jpg" />
  <Card.Content>
    <Card.Header>Kevin Durant</Card.Header>
    <Card.Meta>Drafted in 2007</Card.Meta>
    <Card.Description>"A UNICORN"</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>Current Season Stats</a>
  </Card.Content>
</StyledCard>
</Grid.Column> */}