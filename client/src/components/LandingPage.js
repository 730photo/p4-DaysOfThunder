import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>W E L C O M E</h1>
        <button><Link to='/login'>Log In</Link></button>
      </div>
    )
  }
}