json.array! @rewards do |reward|
  json.id reward.id
  json.project_id reward.project.id
  json.name reward.name
  json.cost reward.cost
  json.description reward.description
end
