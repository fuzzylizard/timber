# frozen_string_literal: true

# Represents the state of a user's application
class ApplicationState < ApplicationRecord
  belongs_to :user
end
