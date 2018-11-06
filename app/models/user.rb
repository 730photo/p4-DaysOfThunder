class User < ApplicationRecord
    has_many :posts
    has_many :players, through: :posts 
end
