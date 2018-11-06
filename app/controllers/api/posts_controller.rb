class Api::PostsController < ApplicationController

def index
    @player = Player.find(params[player_id])
    @posts = @player.posts
    render json: @posts 
end

def show
    @post = Post.find(params[:id])
    @player = @post.player
    render json: @post 
end

def create
    @player = Player.find(params[:player_id])
    @post = @player.posts.create!(post_params)
    @posts = @player.posts
    render json: @posts
end

def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    render json: @posts
end

def destroy
    @post = Post.find(params[:id]).destroy
    render json: 200
end


private
def post_params
    params.require(:post).permit(:body)
end
end
