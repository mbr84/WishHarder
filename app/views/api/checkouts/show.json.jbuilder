json.extract! @checkout, :id, :user_id, :reward_id, :cost

json.project @checkout.project
json.author @checkout.author
