json.array! @rewards do |reward|
  json.id reward.id
  json.project_id reward.project.id
  json.name reward.name
  json.value reward.value
  json.description reward.description
end
