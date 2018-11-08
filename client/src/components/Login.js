import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    users: [],
    newUser: {
      userName: "",
    },
    edit : true
  };


  // the users are displayed
  componentDidMount = async () => {
    const response = await axios.get("/api/users");
    this.setState({ users: response.data });
  };

  // handles the change function
  handleChange = event => {
    const newUser = { ...this.state.newUser };
    newUser[event.target.name] = event.target.value;
    this.setState({ newUser });
  };

  // handle the submit function
  handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post("/api/users", this.state.newUser);

    const users = [...this.state.users];
    users.push(response.data);
    this.setState({ users });
  };

  // handles the delete function
  handleDelete = async userId => {
    await axios.delete(`/api/users/${userId}`);
    const response = await axios.get("/api/users");
    this.setState({ users: response.data });
    // await this.getAllUsers()
  };


  // handles the edit function
  handleEdit = async (i) => {
    const response = await axios.put(`/api/users/${this.state.users[i]._id}`, this.state.users[i]);
    console.log(response)
  }
  
  
//handles the edit change function
  handleEditChange = (e, i) => {
    const users = [ ...this.state.users ]
    users[i][e.target.name] = e.target.value
    this.setState({ users })
  }

  // turns the userName into a link and tells it where to go once you click on it
  render() {
    const usersList = this.state.users.map((user, i) => {
      console.log(user);
      return (
        <div>
          <Link to={`/users/${user._id}/visions`}>Name: {user.userName}</Link>
          <button onClick={() => this.handleDelete(user._id)}>DELETE</button>
          <form onSubmit={() => this.handleEdit(i)}>
            <input 
              type="text"
              name="userName"
              value={user.userName}
              onChange={(event) => this.handleEditChange(event, i)}
            />
            <button type="submit">EDIT</button>
          </form>
        </div>
      );
    });

    // style the Login page
    // what you need to have when you come to the Login page
    // has the Create New User button
    return (
      <div>
        <h1>Login Page</h1>
        {usersList}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userName"
            value={this.state.newUser.userName}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create New User" />
        </form>

        

      </div>
    );
    }
  }