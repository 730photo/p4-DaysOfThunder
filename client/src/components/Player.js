import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewPostForm from './NewPostForm';
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

const Page = styled.div`
    margin: auto;
    background: #f1f1f1;
`

const PlayerPicture = styled.img`
    width: 60%;
    padding-top: 60px;
    padding-left: 40%;
    position: center;
`
const Caption = styled.div`
    color: white;
    font-size: 50px;
    left: 0;
    position:absolute;
    text-align:center;
    top: 20px;
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-style: italic;
`

const PlayerName = styled.div`
    padding-left: 30px;
    padding-top: 20px;
    width: 100vw;
    display: block;
    justify-content: center;
    align-items: baseline;
    background: black;
`
const PostContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    background: black;
`
const StyledCard = styled(Card)`
    &&&{
        width: 600px;
    }
`

export default class Player extends Component {
    state = {
        player: {},
        posts: [],
        
    }

    async componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const playerId = this.props.match.params.id
        const responsePlayer = await axios.get(`/api/players/${playerId}`)
        const responsePost = await axios.get(`/api/players/${playerId}/posts`)
        
        
        
        this.setState({
            posts: responsePost.data,
            player: responsePlayer.data,
        })
    }
    

    addNewPost = async (newPost) => {
        const id = this.props.match.params.id
        await axios.post(`/api/players/${id}/posts`, newPost)
        this.fetchData()
    }

    render() {
        const player = this.state.player
        const postContent = this.state.posts.map((post, i) => {
            return (
                <Link to={`/players/${post.player_id}/posts/${post.id}`}>
                <StyledCard key={i}>
                    <Card.Content description={post.body} />
                    <Card.Content extra>
                        {post.created_at}
                    </Card.Content>
                </StyledCard>
                </Link>
            )
        })
        return (
            <Page>
                <PlayerPicture src={player.img} alt={player.name} />
                <Caption>{player.name}</Caption>
                <PlayerName>
                        <NewPostForm 
                        addNewPost={this.addNewPost}
                         /> 
                </PlayerName>
                <PostContainer>
                    {postContent.reverse()}
                </PostContainer>
                
            </Page>
        )
    }
}


























// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'



// export default class Player extends Component {
//   render() {
//     return (
//       <div>
//         Hello from Player Page

//       </div>
//     )
//   }
// }
