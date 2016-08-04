desc "This task is called by the Heroku scheduler add-on"
task :clean_and_bill => :environment do
  Project.clean_and_bill
end
