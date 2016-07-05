json.id @project.id
json.title @project.title
json.content @project.content
json.blurb @project.blurb
json.primary_img @project.primary_img
json.complete @project.complete
json.goal @project.goal
json.pledged @project.pledged
json.featured @project.featured
json.city @project.city
json.state @project.state
json.backers @project.backers
json.daysLeft (((@project.duration * 86400) - (Time.now - @project.created_at)) / 86400).floor
json.author do
  json.fname @project.author.fname
  json.lname @project.author.lname
  json.username @project.author.username
  json.email @project.author.email
end
json.rewards do
  json.array! @project.rewards do |reward|
    json.project_id reward.project_id
    json.name reward.name
    json.id reward.id
    json.description reward.description
  end
end
