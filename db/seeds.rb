Player.destroy_all
User.destroy_all
Post.destroy_all 

user = User.create(name: "Reg", player: "Russell Westbrook")
player = Player.create(name: "Russell Westbrook", img: "https://i.imgur.com/QdF9klJ.jpg")
player2 = Player.create(name: "Kevin Durant", img: "https://i.imgur.com/EK21ciU.jpg")
player3 = Player.create(name: "James Harden", img: "https://i.imgur.com/4wfKbvA.jpg")
post = Post.create(body: "He is the triple-doble KING", player: player)