Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :sessions, only: [:create, :destroy, :show]
    resources :projects do
      resources :rewards, only: [:index]
    end
    resources :rewards, except: [:edit, :update, :index]
    resources :rewardings, only: :create
  end

  root "static_pages#root"

end
