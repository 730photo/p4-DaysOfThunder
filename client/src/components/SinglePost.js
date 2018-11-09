import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { Button } from 'semantic-ui-react'
import EditPostForm from './EditPostForm';
import styled from 'styled-components'

const SinglePostContainer = styled.div`
   padding: 100px;
`


export default class SinglePost extends Component {
    state = {
        player: {},
        post: {}
    }

    async componentDidMount() {
        this.fetchData()
    }

    fetchData= async () => {
        const player_id = this.props.match.params.player_id
        const post_id = this.props.match.params.id
        const responsePlayer = await axios.get(`/api/players/${player_id}`)
        console.log(responsePlayer.data)

        const responsePost = await axios.get(`/api/players/${player_id}/posts/${post_id}`)
        console.log(responsePost.data)
        this.setState({ player: responsePlayer.data, post: responsePost.data })

    }

    handleDelete = async (postId) => {
        swal({
            title: `Are You Sure You want to Delete  ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Success!', { icon: "success" })
                        .then(async () => {
                            const player_id = this.props.match.params.player_id
                            await axios.delete(`/api/players/${player_id}/posts/${postId}`)
                            this.props.history.push(`/players/${player_id}`)
                        })
                } else {
                    swal("Successfully Cancelled");
                }
            })
    }


    render() {
        const player = this.state.player
        const post = this.state.post
        return (
            <SinglePostContainer>
                <h2>{player.name}</h2>
                <p>{post.body}</p>
                <EditPostForm
                    playerId={this.props.match.params.player_id}
                    postId={this.props.match.params.id}
                    push={this.props.history.push}
                    fetchData={this.fetchData()}
                />
                <Button onClick={() => this.handleDelete(post.id)}>Delete</Button>
            </SinglePostContainer>
        )
    }
}