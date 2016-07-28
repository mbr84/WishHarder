Rails.configuration.stripe = {
    :publishable_key => ENV["stripe_public_test_key"],
    :secret_key      => ENV["stripe_secret_test_key"]
}

Stripe.api_key = Rails.application.secrets.stripe_secret_key
