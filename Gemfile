# frozen_string_literal: true

source 'https://rubygems.org'

gem 'rails', '~> 8.1.1'

# The modern asset pipeline for Rails [https://github.com/rails/propshaft]
gem 'bootsnap', require: false
gem 'jbuilder'
gem 'pg'
gem 'propshaft'
gem 'puma', '>= 5.0'
gem 'tailwindcss-rails', '~> 4.4'
gem 'tzinfo-data', platforms: %i[windows jruby]

# Deploy this application anywhere as a Docker container [https://kamal-deploy.org]
gem 'kamal', require: false

# Add HTTP asset caching/compression and X-Sendfile acceleration to Puma [https://github.com/basecamp/thruster/]
gem 'thruster', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem 'image_processing', '~> 1.2'

# Use the database-backed adapters for Rails.cache, Active Job, and Action Cable
gem 'solid_cable'
gem 'solid_cache'
gem 'solid_queue'

# CUSTOM GEMS
gem 'rack-cors'

group :development, :test do
  gem 'brakeman', require: false
  gem 'bundler-audit', require: false
  gem 'debug', platforms: %i[mri windows], require: 'debug/prelude'
  gem 'dotenv'
  gem 'rspec-rails', '~> 8.0.0'
  gem 'rubocop', '~> 1.82', '>= 1.82.1'
end

group :development do
  gem 'web-console'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
end

gem 'vite_rails', '~> 3.11'
