Rails.application.routes.draw do
 
  namespace :api do
    resources :users do
      resources :posts
    end
  end
  namespace :api do
    resources :players do
      resources :posts
    end
  end

end