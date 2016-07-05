json.array! @projects do |project|
  json.id project.id
  json.title project.title
  json.content project.content
  json.blurb project.blurb
  json.primary_img project.primary_img
  json.city project.city
  json.state project.state
  json.backers project.backers.count
  json.daysLeft (((project.duration * 86400) - (Time.now - project.created_at)) / 86400).floor
  json.complete project.complete
  json.goal project.goal
  json.pledged project.pledged
  json.featured project.featured
  json.author do
    json.fname project.author.fname
    json.lname project.author.lname
    json.username project.author.username
    json.email project.author.email
  end
  json.rewards do
    json.array! project.rewards do |reward|
      json.project_id reward.project_id
      json.name reward.name.upcase
      json.id reward.id
      json.description reward.description
      json.value reward.value
      json.backers reward.backers.count
    end
  end
end
