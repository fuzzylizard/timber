# frozen_string_literal: true

# Represents a user in the system
class User < ApplicationRecord
  has_secure_password

  has_many :sessions, dependent: :destroy
  has_many :jobs
  has_many :application_states

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
