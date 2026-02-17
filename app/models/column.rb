# frozen_string_literal: true

# Represents the state of a user's application
class Column < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
end
