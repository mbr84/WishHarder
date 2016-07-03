# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Project.create([{
  title: "My sweet project",
  content: "character",
  author_id: 150,
  goal: 10000,
  featured: false,
  blurb: "click to learn more",
  duration: "90",
  complete: false,
  primary_img:"http://www.bloggingways.net/wp-content/uploads/2014/07/stock-images-for-blog.jpg",
  pledged: 100,
  city: "Austin",
  state: "TX"
}])

projects = []
users = []

100.times do
  user = {
    username: Faker::Internet.user_name,
    password: "password",
    email: Faker::Internet.email,
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name
  }
  users << user
end

User.create(users)
