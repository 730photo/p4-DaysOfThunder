import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// const StyledPage = styled.div`
//   background: red;
//   background-size: 100%;
// `

const StyledCard = styled(Card)`
  &&& {
    /* width: 600px;
    display: flex; */
  }
`;

const StyledImage = styled(Image)`
  width: 200px;
`;

const LandingPage = () => (
  // <StyledPage>
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <StyledCard>
          <StyledImage src="https://i.imgur.com/QdF9klJ.jpg" />
          <Card.Content>
            <Card.Header>Russell Westbrook</Card.Header>
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
            <Card.Header>Russell Westbrook</Card.Header>
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
          <StyledImage src="https://i.imgur.com/WP9N9Ct.jpg" />
          <Card.Content>
            <Card.Header>Russell Westbrook</Card.Header>
            <Card.Meta>Drafted in 2008</Card.Meta>
            <Card.Description>"TRIPLE-DOUBLE KING"</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>Current Season Stats</a>
          </Card.Content>
        </StyledCard>
      </Grid.Column>
    </Grid.Row>
  </Grid>

  //</StyledPage>
);

export default LandingPage;
