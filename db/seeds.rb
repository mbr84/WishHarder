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

images = ['http://res.cloudinary.com/dxbwq1eyw/image/upload/ar_1.77,c_crop/v1468019781/forza-horizon-2-wallpaper-4092-4313-hd-wallpapers_dbq28p.jpg',
"http://res.cloudinary.com/dxbwq1eyw/image/upload/ar_1.77,c_crop/v1468019763/tools_u2ywl0.jpg",
"http://res.cloudinary.com/dxbwq1eyw/image/upload/ar_1.77,c_crop/v1468019739/hipster_phurfh.jpg",
"http://res.cloudinary.com/dxbwq1eyw/image/upload/ar_1.77,c_crop/v1468019700/Evolution-of-a-Hipster_FINAL2015_fnvgtc.jpg",
"http://res.cloudinary.com/dxbwq1eyw/image/upload/ar_1.77,c_crop/v1468020337/5304025338_e8d8d17a0e_o_s2pczg.jpg",
"http://res.cloudinary.com/dxbwq1eyw/image/upload/ar_1.77,c_crop/v1468020326/petra-jordan_vhbzkm.jpgjpg",]

projects = images.map do |img|
  Project.new({
    title: Faker::Hipster.sentence(3),
    content: Faker::Hipster.paragraph,
    complete: false,
    duration: (20..40).to_a.sample,
    goal: (200..30000).to_a.sample,
    pledged: 0,
    featured: [true, false].sample,
    blurb: Faker::Hacker.say_something_smart,
    primary_img: img,
    city: Faker::Address.city,
    state: Faker::Address.state,
    author_id: (151..249).to_a.sample
  })
end

User.create(users)
Project.create(projects)
