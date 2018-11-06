class Player < ApplicationRecord
  has many :posts, dependant: :destroy
  has_many :users, through: :posts
end
