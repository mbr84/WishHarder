json.array! @projects do |project|
  json.partial! 'api/projects/projects', project: project
  json.thumbNail project.primary_img.gsub("ar_1.77,c_crop", "w_315")
end
