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
    

# def index
    #     auth = {:username => "947843d8-21e0-442d-b7fb-545549", :password => "dunkedon80"}
    #     @res = HTTParty.get('https://api.mysportsfeeds.com/v1.1/pull/nba/2018-2019-regular/player_gamelogs.json?player=westbrook', :basic_auth => auth)
    #     @players = Player.all 
    #     render json: @players
    # end