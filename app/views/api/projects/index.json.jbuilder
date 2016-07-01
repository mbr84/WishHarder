json.array! @projects do |project|
  json.title project.title
  json.content. body.content
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
