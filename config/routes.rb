Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy, :show]
    resources :projects
  end

  root "static_pages#root"

end
