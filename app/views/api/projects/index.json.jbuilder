json.array! @projects do |project|
  json.id project.id
  json.title project.title
  json.content project.content
  json.author do
    json.fname project.author.fname
    json.lname project.author.lname
    json.username project.author.username
    json.email project.author.email
  end
  json.complete project.complete
  json.goal project.goal
  json.pledged project.pledged
  json.featured project.featured
end