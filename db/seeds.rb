# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Player.destroy_all
User.destroy_all
Post.destroy_all 

user = User.create(name: "Reg", player: "Russell Westbrook")
player = Player.create(name: "Russell Westbrook", img: "https://i.imgur.com/QdF9klJ.jpg")
player2 = Player.create(name: "Kevin Durant", img: "https://i.imgur.com/WXKRPoM.jpg")
player3 = Player.create(name: "James Harden", img: "https://i.imgur.com/YFSvdgl.jpg")
post = Post.create(body: "He is the triple-doble KING", player: player)