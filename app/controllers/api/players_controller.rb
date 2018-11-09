class Api::PlayersController < ApplicationController
    include HTTParty 
 
    def index
        # @res = HTTParty.get('https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/daily_player_stats.json?fordate=20181027')
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
