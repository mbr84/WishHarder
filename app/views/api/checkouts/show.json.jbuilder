json.extract! @checkout, :id, :user_id, :reward_id, :cost

json.project @checkout.project
json.reward @checkout.reward
json.author @checkout.author
