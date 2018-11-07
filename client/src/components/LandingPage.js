import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const StyledBackground = styled.div`
  background-image: url('https://i.imgur.com/32ai4pf.jpg');
  background-size: cover;
  background-position: center;
  
  .Thunder {
    height: 100vh;
  }
  
  a {
    text-decoration: none;
  }
`
const StyledWelcome = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 100%;
  /* img {
    width: 70vw;
  } */
`

export default class LandingPage extends Component {
  render() {
    return (
      <StyledBackground>
        <div className="Thunder">
          <Link to=''>
            <StyledWelcome> 
            </StyledWelcome>
          </Link>
        </div>
      </StyledBackground>
    )
  }
}
