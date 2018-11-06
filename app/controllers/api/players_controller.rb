class Api::PlayersController < ApplicationController
def index
    @players = Player.all 
    render json: @players
end

def show
    @player = Player.find(params[:id])
    render json: @player
end

def create
end

def destroy
    @player = Play.find(params[:id]).destroy
    render status: 200
end

def update
    @player = Player.find(params[:id]).update
    render json: @player 
end


private
def player_params
    params.require(:player).permit(:name, :img)
end
end
