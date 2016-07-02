json.id @project.id
json.title @project.title
json.content @project.content
json.blurb @project.blurb
json.primary_img @project.primary_img
json.author do
  json.fname @project.author.fname
  json.lname @project.author.lname
  json.username @project.author.username
  json.email @project.author.email
end
json.complete @project.complete
json.goal @project.goal
json.pledged @project.pledged
json.featured @project.featured
