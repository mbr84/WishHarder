# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


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
